/*
 * lexemes.js: Fully-parsed lexemes for asserting during tests
 *
 * (C) 2012, Charlie Robbins
 *
 */

//
// test/fixtures/isla/intro.is
//
exports['intro.is'] = [ 
  [ 'VAR', 'declare', 'name', 0 ],
  [ 'OP', 'assign', 'is', 0 ],
  [ 'TYPE', 'string', 'Isla', 0 ],
  [ 'EOL', '\n', undefined, 0 ],
  [ 'FN', 'write', 'write', 1 ],
  [ 'TYPE', 'string', 'My name is', 1 ],
  [ 'EOL', '\n', undefined, 1 ],
  [ 'FN', 'write', 'write', 2 ],
  [ 'VAR', 'use', 'name', 2 ],
  [ 'EOL', '\n', undefined, 2 ],
  [ 'EOF', 'EOF', undefined, 3 ]
];

//
// test/fixtures/isla/hallway.is
//
exports['hallway.is'] = [ 
  [ 'VAR', 'declare', 'my', 0 ],
  [ 'VAR', 'declare', 'name', 0 ],
  [ 'OP', 'assign', 'is', 0 ],
  [ 'TYPE', 'string', 'Mary', 0 ],
  [ 'EOL', '\n', undefined, 0 ],
  [ 'VAR', 'declare', 'my', 1 ],
  [ 'VAR', 'declare', 'summary', 1 ],
  [ 'OP', 'assign', 'is', 1 ],
  [ 'TYPE', 'string', 'You are a young boy.  You have no shoes on.', 1 ],
  [ 'EOL', '\n', undefined, 1 ],
  [ 'VAR', 'declare', 'hallway', 3 ],
  [ 'OP', 'create', 'is a', 3 ],
  [ 'VAR', 'use', 'room', 3 ],
  [ 'EOL', '\n', undefined, 3 ],
  [ 'VAR', 'declare', 'hallway', 4 ],
  [ 'VAR', 'declare', 'summary', 4 ],
  [ 'OP', 'assign', 'is', 4 ],
  [ 'TYPE', 'string', 'It is dark. You hear a girl crying.', 4 ],
  [ 'EOL', '\n', undefined, 4 ],
  [ 'VAR', 'declare', 'rose', 6 ],
  [ 'OP', 'create', 'is a', 6 ],
  [ 'VAR', 'use', 'flower', 6 ],
  [ 'EOL', '\n', undefined, 6 ],
  [ 'VAR', 'declare', 'rose', 7 ],
  [ 'VAR', 'declare', 'summary', 7 ],
  [ 'OP', 'assign', 'is', 7 ],
  [ 'TYPE', 'string', 'The rose is the colour of red velvet.', 7 ],
  [ 'EOL', '\n', undefined, 7 ],
  [ 'VAR', 'declare', 'hallway', 8 ],
  [ 'VAR', 'declare', 'items', 8 ],
  [ 'OP', 'add', 'add', 8 ],
  [ 'VAR', 'use', 'rose', 8 ],
  [ 'EOL', '\n', undefined, 8 ],
  [ 'VAR', 'declare', 'garden', 10 ],
  [ 'OP', 'create', 'is a', 10 ],
  [ 'VAR', 'use', 'room', 10 ],
  [ 'EOL', '\n', undefined, 10 ],
  [ 'VAR', 'declare', 'garden', 11 ],
  [ 'VAR', 'declare', 'summary', 11 ],
  [ 'OP', 'assign', 'is', 11 ],
  [ 'TYPE', 'string', 'You see a girl crying.', 11 ],
  [ 'EOL', '\n', undefined, 11 ],
  [ 'VAR', 'declare', 'hallway', 12 ],
  [ 'VAR', 'declare', 'exit', 12 ],
  [ 'OP', 'assign', 'is', 12 ],
  [ 'VAR', 'use', 'garden', 12 ],
  [ 'EOL', '\n', undefined, 12 ],
  [ 'VAR', 'declare', 'my', 14 ],
  [ 'VAR', 'declare', 'room', 14 ],
  [ 'OP', 'assign', 'is', 14 ],
  [ 'VAR', 'use', 'hallway', 14 ],
  [ 'EOL', '\n', undefined, 14 ],
  [ 'EOF', 'EOF', undefined, 15 ]
];