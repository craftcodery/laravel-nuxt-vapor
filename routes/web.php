<?php

use Illuminate\Support\Facades\Route;

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

// Place all routes that your Laravel app needs to render here. This should likely be a short list.
// Most of your routes will likely live within your api.php routes file.

// Redirect all other routes to client
Route::redirect('{path}', config('app.client_url'))->where('path', '(.*)');
