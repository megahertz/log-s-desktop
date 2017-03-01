#!/usr/bin/electron --js-flags=--harmony-async-await

'use strict';

const { app, BrowserWindow } = require('electron');
const logS = require('log-s');

let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});

  win.loadURL('http://localhost:8085');


  win.on('closed', () => win = null);
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
