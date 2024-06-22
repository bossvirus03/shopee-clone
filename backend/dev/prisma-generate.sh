#!/bin/bash

# if [[ $1 ]]; then
#     SCHEMA_FILE=./libs/data-access/src/lib/prisma/$1.prisma
#     ./node_modules/.bin/prisma generate --schema=$SCHEMA_FILE
# else 
#     for filename in ./libs/data-access/src/lib/prisma/*; do
#     ./node_modules/.bin/prisma generate --schema=$filename
#     done
# fi

./node_modules/.bin/prisma generate --schema=./libs/data-access/src/lib/prisma/
