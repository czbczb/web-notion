function convertIpynbToMarkdown() {
  const cells = [
    {
      cell_type: "markdown",
      id: "9f14d064",
      metadata: {},
      source: [
        "# MaxLang Quick Start \n",
        "## -- All New Design, All For DevOps ",
      ],
    },
    {
      cell_type: "markdown",
      id: "b34c577a",
      metadata: {},
      source: [
        "MaxLang is the dedicated programming language for automating the DevOps tasks, which is implemented and maintained by SpotMax team.",
      ],
    },
    {
      cell_type: "markdown",
      id: "fb364061",
      metadata: {},
      source: [
        "## Primitive Data Types\n",
        "### Number\n",
        "In Maxlang, it is not necessary to distinguish the numerical value's type, such as integer and float. Maxlang can recoginze and convert values automatically. ",
      ],
    },
    {
      cell_type: "code",
      execution_count: 1,
      id: "e7ea6439",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["111\n", "\n"],
          },
          execution_count: 1,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["a = 11\n", "b = 100\n", "a + b"],
    },
    {
      cell_type: "code",
      execution_count: 2,
      id: "c249890d",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["11.200000\n", "\n"],
          },
          execution_count: 2,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["a = 10\n", "b = 1.2\n", "a + b"],
    },
    {
      cell_type: "markdown",
      id: "01d130a6",
      metadata: {},
      source: ["### String\n", 'A string value is quoted by " or ` .'],
    },
    {
      cell_type: "code",
      execution_count: 3,
      id: "67e00ac8",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["Hello World\n", "\n"],
          },
          execution_count: 3,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['a = "Hello World"\n', "a"],
    },
    {
      cell_type: "code",
      execution_count: 4,
      id: "f87838a1",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["Hello World!     I love China!\n", "\n"],
          },
          execution_count: 4,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["a = `Hello World!\n", "     I love China!`\n", "a"],
    },
    {
      cell_type: "code",
      execution_count: 5,
      id: "5287e5c0",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["Hello World\n", "\n"],
          },
          execution_count: 5,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['a = "Hello"\n', "b = `World`\n", 'a+" "+ b'],
    },
    {
      cell_type: "markdown",
      id: "a0645fb4",
      metadata: {},
      source: [
        "### Boolean\n",
        'The boolean value is either "true" or "false".',
      ],
    },
    {
      cell_type: "code",
      execution_count: 6,
      id: "b59a3677",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["true\n", "\n"],
          },
          execution_count: 6,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["a = true;\n", "a"],
    },
    {
      cell_type: "code",
      execution_count: 7,
      id: "6689c460",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["false\n", "\n"],
          },
          execution_count: 7,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["2 > 3"],
    },
    {
      cell_type: "markdown",
      id: "c20f2f13",
      metadata: {},
      source: [
        "### Function\n",
        "Function is treated as the basic data type and the first class citizen in Maxlang. If you are familiar with Lisp, you can treat it as the function in Lisp.\n",
        "\n",
        "In Maxlang, function can be used as the arguments or the return value of other functions.\n",
      ],
    },
    {
      cell_type: "code",
      execution_count: 8,
      id: "393c452e",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["2\n", "\n"],
          },
          execution_count: 8,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["add = fn(x,y){x+y}\n", "add(1,1)"],
    },
    {
      cell_type: "code",
      execution_count: 9,
      id: "8a653eda",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["1\n", "\n"],
          },
          execution_count: 9,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "sub = fn(x,y){\n",
        "         return x-y;\n",
        "       }\n",
        "sub(2,1)",
      ],
    },
    {
      cell_type: "markdown",
      id: "4c45bf3c",
      metadata: {},
      source: [
        'The following example is about how you can implement "Command Patter" (GoF) very easily by leveraging Maxlang\'s function.',
      ],
    },
    {
      cell_type: "code",
      execution_count: 10,
      id: "bc1dd834",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["100\n", "\n"],
          },
          execution_count: 10,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "cmdPattern = fn(x, y){y(x)}\n",
        "cmdPattern(10, fn(x){x*10}) \n",
      ],
    },
    {
      cell_type: "code",
      execution_count: 11,
      id: "66f05185",
      metadata: {
        scrolled: true,
      },
      outputs: [
        {
          data: {
            "text/plain": ["1\n", "\n"],
          },
          execution_count: 11,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["cmdPattern(10, fn(x){x/10})"],
    },
    {
      cell_type: "markdown",
      id: "1193c493",
      metadata: {},
      source: [
        "## Statements\n",
        "### Conditional statement\n",
        'The typical conditional statements, "if" and "if-else" are both supported in Maxlang.',
      ],
    },
    {
      cell_type: "code",
      execution_count: 12,
      id: "77c5ee16",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["TRUE\n", "\n"],
          },
          execution_count: 12,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "if (true) {\n",
        '    "TRUE"\n',
        "}else{\n",
        '    "FALSE"\n',
        "}",
      ],
    },
    {
      cell_type: "markdown",
      id: "0a9b9fa0",
      metadata: {},
      source: ["### Loop statement"],
    },
    {
      cell_type: "markdown",
      id: "2238d430",
      metadata: {},
      source: [
        'For loop structure, currently, only "while" statement is supported. The "break" and "continue" statements are supported, which can be used in the loop structure to change the execution flow.',
      ],
    },
    {
      cell_type: "code",
      execution_count: 13,
      id: "684c2166",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["45\n", "\n"],
          },
          execution_count: 13,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "i = 1;\n",
        "sum = 0;\n",
        "while (i < 10) {\n",
        "    sum = sum + i;\n",
        "    i = i + 1\n",
        "}\n",
        "sum ",
      ],
    },
    {
      cell_type: "code",
      execution_count: 14,
      id: "64b93397",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["20\n", "\n"],
          },
          execution_count: 14,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "i = 1\n",
        "sum = 0\n",
        "while (i<10) {  \n",
        "    if (i/2 * 2 != i) { /* 2 + 4 + 6 + 8 */\n",
        "        i = i + 1\n",
        "        continue\n",
        "    }\n",
        "    sum = sum + i\n",
        "    i = i+1\n",
        "}\n",
        "sum",
      ],
    },
    {
      cell_type: "markdown",
      id: "c9f27940",
      metadata: {},
      source: [
        "## Collections\n",
        "### Array\n",
        "The elements in an array can be any primitive type object, even a function, also the different type of the elements could be mixed in an array. \n",
        "\n",
        "The index of an array starts from 0.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 15,
      id: "c556fc45",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": [],
          },
          execution_count: 15,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['myArray = [1,2, fn(x,y){x+y}, "Hello ", "World"]'],
    },
    {
      cell_type: "code",
      execution_count: 16,
      id: "ff8a9a0f",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["3\n", "\n"],
          },
          execution_count: 16,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["myArray[2](myArray[0],myArray[1])"],
    },
    {
      cell_type: "code",
      execution_count: 17,
      id: "3c03b637",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["Hello World\n", "\n"],
          },
          execution_count: 17,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["myArray[2](myArray[3],myArray[4])"],
    },
    {
      cell_type: "markdown",
      id: "fb0b8dea",
      metadata: {},
      source: ["#### Built-in functions for array"],
    },
    {
      cell_type: "markdown",
      id: "ba0a2eff",
      metadata: {},
      source: [
        "##### len (  < array > )\n",
        "Get the number of the elements in the array.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 18,
      id: "234fea7e",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": [],
          },
          execution_count: 18,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["arr = [1,2,3,4,5]"],
    },
    {
      cell_type: "code",
      execution_count: 19,
      id: "6e0bfe17",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["5\n", "\n"],
          },
          execution_count: 19,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["len(arr)"],
    },
    {
      cell_type: "markdown",
      id: "93438442",
      metadata: {},
      source: [
        "##### first ( < array > )\n",
        "Get the first element of the array",
      ],
    },
    {
      cell_type: "code",
      execution_count: 20,
      id: "2164ad7c",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["1\n", "\n"],
          },
          execution_count: 20,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["first(arr)"],
    },
    {
      cell_type: "markdown",
      id: "55bf1f04",
      metadata: {},
      source: [
        "##### last ( < array > )\n",
        "Get the last element of the array",
      ],
    },
    {
      cell_type: "code",
      execution_count: 21,
      id: "33a4e389",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["5\n", "\n"],
          },
          execution_count: 21,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["last(arr)"],
    },
    {
      cell_type: "markdown",
      id: "8a091a53",
      metadata: {},
      source: [
        "##### rest (< array >)\n",
        "return a new array with removing the first element ",
      ],
    },
    {
      cell_type: "code",
      execution_count: 22,
      id: "bc32e40d",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["[2, 3, 4, 5]\n", "\n"],
          },
          execution_count: 22,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["rest(arr)"],
    },
    {
      cell_type: "markdown",
      id: "b387b786",
      metadata: {},
      source: [
        "The following example is to travel an array with the built-in functions.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 23,
      id: "1bfa90d4",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["55\n", "\n"],
          },
          execution_count: 23,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "nums = [1,2,3,4,5,6,7,8,9,10]\n",
        "sum = 0\n",
        "while(len(nums)>0){\n",
        "    sum = sum + first(nums)\n",
        "    nums = rest(nums)\n",
        "}\n",
        "sum",
      ],
    },
    {
      cell_type: "markdown",
      id: "86857160",
      metadata: {},
      source: [
        "### HashTable\n",
        "Like the mainstream programming language, HashTable is the collection of the key-value pairs. \n",
        "\n",
        "In a key-value pair :\n",
        "\n",
        "The key can be a primitive object except a function. \n",
        "\n",
        "The value be a primitive object, a collection or a hashtable. ",
      ],
    },
    {
      cell_type: "code",
      execution_count: 24,
      id: "29aa38f3",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": [],
          },
          execution_count: 24,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        'dic = {1:"one","one":1,"inc":fn(x){x+1}, "arr":[1,2,3,5], "table":{2:"two","sub":fn(x){x-1}}}',
      ],
    },
    {
      cell_type: "code",
      execution_count: 25,
      id: "eef2c72b",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["one\n", "\n"],
          },
          execution_count: 25,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["dic[1]"],
    },
    {
      cell_type: "code",
      execution_count: 26,
      id: "3fc59525",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["2\n", "\n"],
          },
          execution_count: 26,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['dic["inc"](dic["one"])'],
    },
    {
      cell_type: "markdown",
      id: "34f1a429",
      metadata: {},
      source: [
        "#### Built-in functions for Hashtable\n",
        "##### keys (< hashtable >)\n",
        "Get the keys of a hashtable.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 27,
      id: "fd63b0d5",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["[1, one, inc, arr, table]\n", "\n"],
          },
          execution_count: 27,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["keys(dic)"],
    },
    {
      cell_type: "markdown",
      id: "8b1b90e9",
      metadata: {},
      source: [
        "##### values (< hashtable >)\n",
        "Get the values of a hashtable",
      ],
    },
    {
      cell_type: "code",
      execution_count: 28,
      id: "350ad397",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": [
              "[1, fn(x) {\n",
              "(x + 1)\n",
              "}, [1, 2, 3, 5], {sub: fn(x) {\n",
              "(x - 1)\n",
              "}, 2: two}, one]\n",
              "\n",
            ],
          },
          execution_count: 28,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ["values(dic)"],
    },
    {
      cell_type: "markdown",
      id: "cee7dd46",
      metadata: {},
      source: [
        "### Built-in functions\n",
        "#### Conversion\n",
        "##### ntos (< number >)\n",
        "Convert a numeric value to the related string value.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 29,
      id: "933fa0b7",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["result = 100\n", "\n"],
          },
          execution_count: 29,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['"result = " + ntos(100)'],
    },
    {
      cell_type: "code",
      execution_count: 30,
      id: "42e238dc",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["result = 10.190000\n", "\n"],
          },
          execution_count: 30,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['"result = " + ntos(10.19)'],
    },
    {
      cell_type: "markdown",
      id: "acaddc69",
      metadata: {},
      source: [
        "##### ston (< string >)\n",
        "Convert a string value to the related numeric value.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 31,
      id: "e2f81d23",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["11\n", "\n"],
          },
          execution_count: 31,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['1 + ston("10")'],
    },
    {
      cell_type: "code",
      execution_count: 32,
      id: "06651389",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["12.110000\n", "\n"],
          },
          execution_count: 32,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['1 + ston("11.11")'],
    },
    {
      cell_type: "markdown",
      id: "e1739037",
      metadata: {},
      source: [
        "#### JSON query\n",
        "For one simple example is more expressive than thousands of the words, I'd like to use several simple examples to explain how the built-in functions work.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 33,
      id: "9ec59e10",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": [],
          },
          execution_count: 33,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        'json=`{"name":"sam", \n',
        '        "skills": { \n',
        '                    "coding":["C","Java","php"], \n',
        '                     "habits":["eating","sleeping"],\n',
        '                     "scores":[80,90,100]\n',
        "                    }\n",
        "       }`\n",
      ],
    },
    {
      cell_type: "code",
      execution_count: 34,
      id: "830dfcc4",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["Java\n", "\n"],
          },
          execution_count: 34,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['jpath("skills.coding.[1]", json)'],
    },
    {
      cell_type: "code",
      execution_count: 35,
      id: "6398b0fc",
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": ["php\n", "\n"],
          },
          execution_count: 35,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: ['jpath("skills",json)["coding"][2]'],
    },
    {
      cell_type: "markdown",
      id: "dcfd20ef",
      metadata: {},
      source: ["## MaxLang is growing fast, still more to come!"],
    },
    {
      cell_type: "code",
      execution_count: null,
      id: "9de4fcca",
      metadata: {},
      outputs: [],
      source: [],
    },
  ];
  let temp = "";
  cells.map((item) => {
    console.log("```\n" + item.source.join(""));
    temp +=
      item.cell_type === "code"
        ? "```\n" + item.source.join("") + "\n```"
        : "\n" + item.source.join("") + "\n";
  });
  console.log(temp);
}

convertIpynbToMarkdown();
