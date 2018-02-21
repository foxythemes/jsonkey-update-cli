# jsonkey-update-cli

This is a JSON key-update CLI, useful when you need update a key in a JSON file, getting it of other JSON file.

## Getting Started

*  Install with npm: `npm install @foxythemes/jsonkey-update-cli -D`
*  Run it with `keyupdate`

## Docs

```	
keyupdate -s src-path-giver/ -f file-giver.json -S src-path-receiver/ -F file-receiver.json -k keyToUpdate

Basic options

-s, --srcGiver       Source path of JSON file giver
-f, --fileGiver      Name of JSON file from where key will be get
-S, --srcReceiver    Source path of JSON file receiver
-F, --fileReceiver   Name of JSON file where key will be set
-k, --key            Key that will be updated on JSON file receiver

```

## License

Copyright (c) FoxyThemes
Licensed under the MIT license.
