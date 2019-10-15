<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('categories', 'Api\CategoriesController@index')->name('categories.name');
Route::post('categories', 'Api\CategoriesController@store')->name('categories.store');
Route::patch('categories/{category}', 'Api\CategoriesController@update')->name('category.update');
Route::delete('categories/{category}', 'Api\CategoriesController@destroy')->name('category.delete');