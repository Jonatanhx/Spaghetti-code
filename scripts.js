/* ================================ 5 Bad Practices från Clean Code javascript ================================*/

//1. Förhålla sig till en naming convention
//En blandning av camelCase, snake_case och PascalCase är dålig practice, man ska förhålla sig till en naming convention för ökad läsbarhet
let userName = "John Doe";
let user_address = 'Sveagatan 1';
let PhoneNum = "072123123";

//2. Dåliga namn för variabler och funktioner.
// Q & w är inte beskrivande nog och "add" är inte specifikt nog
//Rätt: Namnge variabler beskrivande och funktioner för var deras syfte är i sin hela kontext.
let q = 5
let w = 10
function add(a, b) {
    return a + b;
}
//3. För mycket nesting
// där trots att koden är beskrivande och egentligen väldigt simplistisk så känns koden väldigt komplex helt plötsligt
// Förbättringar: Använd switch istället för if else statement för ökad läsbarhet, dela process A & B till separata funktioner och ha processData för sig själv för ökad läsbarhet.
function processData(data) {
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].type === 'A') {
          if (data[i].value > 100) {
            console.log('Type A value greater than 100:', data[i].value);
          } else {
            console.log('Type A value less than or equal to 100:', data[i].value);
          }
        } else if (data[i].type === 'B') {
          if (data[i].value < 50) {
            console.log('Type B value less than 50:', data[i].value);
          } else {
            console.log('Type B value greater than or equal to 50:', data[i].value);
          }
        }
      }
    } else {
      console.log('No data to process');
    }
  }

// 4. Funktioner med för stort ansvar
/* processUserData är ett exempel på en kod som har alldeles för mycket ansvar och borde brytas ut till flera funktioner, den validerar, skapar nytt användarkonto, sparar användaren i databasen och skickar ett välkomstemail. Detta gör även koden mindre flexible då om vi vill använda delar utav den så kan vi inte ta specifika saker från det. Förbättring: Utifrån ens behov, dela upp alla processer till sina egna funktioner eller gruppera delar av dem.*/

function processUserData(userData) {
if (!userData.name || !userData.email || !userData.password) {
    throw new Error('Invalid user data');
}
const newUser = {
    id: generateUniqueId(),
    name: userData.name,
    email: userData.email,
    password: hashPassword(userData.password),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};
    storeUserInDatabase(newUser);
    sendWelcomeEmail(newUser.email, newUser.name);
    return newUser;
}
// 5. Duplicerad kod: 
/* Ens initiala tanke om funktionens syfte kan lätt expandera till något större, det är därför viktigt att gå tillbaka till funktionen och bygga ut den ifall det är passande istället för att separera ansvaret. man hade därför kunnat skapa en "calculateArea(shape)" funktion för att hantera båda instanserna i detta fall. */
function calculateAreaOfRectangle(width, height) {
    return width * height;
}

function calculateAreaOfSquare(side) {
    return side * side;
}
/* ================================ 5 Bad Practices från ESLint ================================*/

// 1. indent(the non-deprecated version): ologiskt och inkonsekvent indentering. Förbättring: Följ en standard för indentering, 1 - 2 indents är vanligt.
function loo(x, y){
        x  = 20
y = 30
                      console.log(x + y)
}
loo()

// 2. no-unused-vars: Oanvända variabler. Förbättring: Använd alla variabler som defineras, ta bort allt onödigt för förbättrad läsbarhet.
let unusedVariable = "This is a message";
  console.log ("This is a message");

// 3. no-template-curly-in-string: Använd ej fel quotation mark vid användandet av template literals. Backticks ska användas
//fel:
  console.log("hello ${name}!")
//rätt:
let name1 = "Jonatan"
  console.log(`Hello ${name1}`)


// 4. No-irregular-whitespace: Varierande mängd white space. Förbättring: det finns olika standarder för var som är korrekt, förhåll dig till en av dem. 1 eller 2 whitespaces är vanligt.

function foo()      {
  console.log   ("Im a function")
}






foo   ()

// 5. No-self-assign: Att ange något till sig själv har ingen effekt, därför är det troligtvis ett misstag. Förbättring: Assigna endast något till något annat.
foo = foo