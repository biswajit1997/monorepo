<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/test',function(){
	return "Biswajit Pradhan";
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register','Api\UserController@create');
Route::post('/login','Api\UserController@login');
Route::post('/userpay','Api\UserController@show');
Route::post('/stripe','Api\UserController@update');


Route::post('/addtag','Api\TagController@create');
Route::get('/addtag','Api\TagController@index');
Route::post('/tag/delete','Api\TagController@destroy');




Route::post('/addpost','Api\PostController@create');
Route::get('/addpost','Api\PostController@index');
Route::post('/postdetails','Api\PostController@show');

Route::post('/comment','Api\CommentController@create');
Route::post('/comments','Api\CommentController@blogcomment');

Route::post('/filter','Api\PostController@filter');

////testing

Route::post('/create','Api\TestCurdController@create');
Route::get('/index','Api\TestCurdController@index');
Route::post('/show','Api\TestCurdController@show');
Route::post('/update','Api\TestCurdController@update');
Route::post('/delete','Api\TestCurdController@destroy');

 


