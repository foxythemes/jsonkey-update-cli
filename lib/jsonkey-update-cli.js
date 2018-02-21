#!/usr/bin/env node

"use strict";

// Include native libs
const fs = require( 'fs' );
const path = require( 'path' );

// Include extrernal libs
const commandLineArgs = require( 'command-line-args' );

// Declare CLI options
const optionDefinitions = [
  { name: 'srcGiver', alias: 's', type: String },
  { name: 'fileGiver', alias: 'f', type: String },
  { name: 'srcReceiver', alias: 'S', type: String },
  { name: 'fileReceiver', alias: 'F', type: String },
  { name: 'key', alias: 'k', type: String }
];

// CLI arguments lib
const options = commandLineArgs( optionDefinitions, { partial: true } );

// Get 'src' and 'dest' Json
var src = require( path.join(process.cwd(), options.srcGiver + options.fileGiver) );
var dest = require( path.join(process.cwd(), options.srcReceiver + options.fileReceiver) );

// Json 'dest' is updated through the key
dest[options.key] = src[options.key];

// Write Json updated
fs.writeFile( options.srcReceiver + options.fileReceiver, JSON.stringify( dest, null, 1 ), function( err ) {
  if( err ) return console.error( err );
  console.log( ' The key ' + options.key  + ' was updated on ' + options.srcReceiver + options.fileReceiver );
});