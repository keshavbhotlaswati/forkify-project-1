/*import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {+
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();*/
//console.log('Test');

// https://forkify-api.herokuapp.com/v2
//import icons from '../img/icons.svg';//parcel 1

import 'core-js/stable';//polyfiling everything else
import 'regenerator-runtime/runtime';//polyfiling async await
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import {MODAL_CLOSE_SEC}from './config.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { render } from 'sass';

//const recipeContainer = document.querySelector('.recipe');
//parcel coded
//if(module.hot){
//module.hot.accept();}
const newFeature= function(){
console.log('new feature');
}
const controlRecipes = async function () {
  try {


    const id=window.location.hash.slice(1);
    console.log(id);
    //1.loaading recipe
    if(!id)return;
    recipeView.renderSpinner();
    //update result view to mark selected result
    resultView.update(model.getSearchResultsPage());
     //update bookmark view
     bookmarksView.update(model.state.bookmarks);
    //1)loading recipe
    await model.loadRecipe(id);
   //const {recipe}= model.state;
  // recipeView.render(model.state.recipe);
   //const recipeView=new recipeView(model.state.recipe);

    //2 rendering  recipe
    recipeView.render(model.state.recipe);
   
  }

  //console.
  catch (err) {
    console.error(`$err`);
    console.log('log2');
    recipeView.renderError();
  } 


};
const controlSearchResults=async function(){

try{
  resultView.renderSpinner();
  console.log(resultView);
   

  //get search query
  const query=searchView.getQuery();
    if(!query)return ;
    //2 load search results  
await model.loadSearchResults(query);
//3 render results
console.log(model.state.search.results);
//resultView.render(model.state.search.results);
resultView.render(model.getSearchResultsPage());
//4 render paginatio button
paginationView.render(model.state.search);

}
catch(err){
  console.log('log 1'+err);
  console.error(err);
}};
const controlPagination =function(goToPage){
  //render new result
  resultView.render(model.getSearchResultsPage(goToPage));
//4 render new  paginatio button
paginationView.render(model.state.search);
  console.log('pag controller'); 
};
const controlSServings=function(newServings){
//update the recipe servings (in state)
 model.updateServings(newServings);

// update the recipe view
recipeView.update(model.state.recipe);
//recipeView.render(model.state.recipe);  

};
const controlAddBookmark=function(){
  //add or remove a bookmark

  if(!model.state.recipe.bookmarked){
    model.addBookmark(model.state.recipe);
  }else
  if(model.state.recipe.bookmarked){
    model.deleteBookmark(model.state.recipe.id);
  }
//model.addBookmark(model.state.recipe);
console.log(model.state.recipe);
//update recipe view
recipeView.update(model.state.recipe);
// render bookmark
bookmarksView.render(model.state.bookmarks);
};
const controlBookmarks=function(){
  bookmarksView.render(model.state.bookmarks);
};
const controlAddRecipe= async function(newRecipe){
  try{
    //show ;pad spinner
    addRecipeView.renderSpinner();
    //upload new recipe
    await model.uploadRecipe(newRecipe);
console.log('new recipe'+newRecipe);
// upload new recipe
//await model.uploadRecipe(newRecipe);
console.log(model.state.recipe);
//render recipe
recipeView.render(model.state.recipe);
//SUCCESS MESSAGE
addRecipeView.renderMessage();
//render bookmark view
bookmarksView.render(model.state.bookmarks);  
//change id in url
window.history.pushState(null,'null', `#${model.state.recipe.id}`);
//window.history.back();
//close the form window   
setTimeout(function(){
  addRecipeView.toggleWindow()  
},MODAL_CLOSE_SEC*1000);
}
catch(err){
console.error(err);
console.log('log 8' +err);
addRecipeView.renderError(err.message);
}

};

const init =function(){
  bookmarksView.addHandlerRender(controlBookmarks);
recipeView.addHandlerRecipe(controlRecipes);
recipeView.addHandlerUpdateServings(controlSServings);
recipeView.addHanddlerAddBookmark(controlAddBookmark);
searchView.addHandlerSearch(controlSearchResults);
paginationView.addHandlerClick(controlPagination);
newFeature();
};
init();
//window.addEventListener('hashchange',showRecipe);
//window.addEventListener('load',showRecipe);