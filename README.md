#JS Band Store

This is web app where you can find lots of books for learning 
JavaScript.

The app is responsive and available on devices up to 320px wide. So, you can use it 
on your phone.

###Scripts:
1. start - use `npm start` or `npm run start` to run the project.
1. build - use `npm build` or `npm run build` to build the project
into production version.
1. test - use `npm test` or `npm run test` to run tests.
1. lint - use `npm lint` or `npm run lint` to check and fix eslint errors.
1. precommit - husky uses this script to run eslint and tests before commiting changes.

###Scenarios:
1. Firstly you need to login. You need to write your name. The name has to contain at 
   least 4 symbols and no more than 16 symbols.
1. Then you will be redirected to books catalog page. There you can see full catalog 
   of JS Band Store books. You can search books by books' title and filter them by 
   price. Search by name and price filter are connected. If you filtered books by 
   price bigger than 0$ and smaller than 25$ price and search book which price is 
   bigger than 25$ you would get `No books` message. Also, if you write the letter 'a' 
   in search field and filter books by price you will see only that books which name 
   starts with letter 'a'.
1. You can see current book info if you click `View` button on one of books cards. 
   Then you can choose that amount of books which you want to buy and add them to cart.
   But you cannot add to cart more books than store has. After adding books to cart 
   you will see message which would tell you that you successfully added books to cart.
1. Than you can return to books' catalog page and continue observing other books or go 
   to cart page, change books count or delete books from cart and make an order. After 
   you made the order you would get message of success purchase with table-conclusion. 
   This table will show you all books which you have bought, total price of every book 
   and total price of all books. After you click `Close` button you will be redirected to 
   books catalog page and the cart will be cleared. Cart is saved in localStorage. So,
   if you reload the page the cart will be saved.
1. Than you can continue observing books or logout by clicking logout button in the 
   header. If you logout before making the order the cart will be cleared.
   
###Used tools:
1. React
1. Redux
1. Styled Components
1. React Router DOM   
1. Axios
1. Jest
1. Eslint   
1. Husky
1. GitHub project