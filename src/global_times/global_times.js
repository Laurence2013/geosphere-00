const url00 = 'https://www.globaltimes.cn/page/202205/1265888.shtml';
const url01 = 'https://www.globaltimes.cn/page/202205/1265904.shtml';
const url02 = 'https://www.globaltimes.cn/page/202205/1266449.shtml';

function globalTimes01(url){
	return rx.Observable.create(observer => {
		axios.get(url)
			.then(response => {
				const $ 		 			= cheerio.load(response.data);
				const title 			= $('.article > .article_top > .article_title').text();
				const journalists = $('.byline').text(); 
				const article 		= $('.article_right').map((index, element) => {
					const article = $(element).text();
					return {article};
				}).get();

				observer.next({title, journalists, article});
				observer.complete();
			})
			.catch(err => observer.error(err));
	});
}
globalTimes01(url00).subscribe(console.log);
