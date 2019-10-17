<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('categories', 'Api\CategoriesController@index')->name('categories.name');
Route::post('categories', 'Api\CategoriesController@store')->name('categories.store');
Route::get('categories/{category}/edit', 'Api\CategoriesController@edit')->name('category.edit');
Route::patch('categories/{category}', 'Api\CategoriesController@update')->name('category.update');
Route::delete('categories/{category}', 'Api\CategoriesController@destroy')->name('category.delete');