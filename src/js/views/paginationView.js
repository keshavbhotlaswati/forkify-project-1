import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler){
    this._parentElement.addEventListener('click' , function(e){
const btn=e.target.closest('.btn--inline');
if(!btn)return ;
console.log(btn);
const gotToPage=btn.dataset.goto;
console.log(gotToPage);
handler(gotToPage);
    });
    }
_generateMarkup(){
//page 1 and tere are other page=
const cur_page=this._data.page;
const numPages=Math.ceil(this_data.results.length/this._data.resultsPerPage);
console.log(numPages); 

//page and no other pages
if(cur_page===1 && numPages>1){
  return `<button  data-goto="${cur_page+1}" class="btn--inline pagination__btn--next">
  <span>Page ${cur_page+1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>`;

}
//last page
if(cur_page===numPage && numPages>1){
  return `<button  data-goto="${cur_page-1}" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>Page ${cur_page-1}</span>
</button>
<button  data-goto="${cur_page+1}class="btn--inline pagination__btn--next">
  <span>Page ${cur_page+1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>`;
}
//some other page

if(cur_page<numPages){
  return `<button data-goto="${cur_page-1}" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>Page ${cur_page-1}</span>
</button>`
;
}

return '';
  }

}

export default new PaginationView();
