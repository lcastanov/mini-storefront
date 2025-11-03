Project Title: Mini-Storefront

Description: This is a mini-storefront that allows to browse products, filter by category and price, add items to a cart, view cart totals, see product stock update over time, view loading, error, and empty states

How to run locally (root directory): Type "npm install" then run Type "npm run dev" then run

How to build: Type "npm run build" then run Type "npm start" then run


FEATURES IMPLEMENTED:

Catalog.jsx	                    Fetch API data (initial load), shared state for filters
                                + cart,interval stock updates with cleanup
ProductList.jsx	                Maps products to cards (key={id})
ProductCard.jsx	                Disable Add button if out of stock; show “Out of stock”
CategoryFilter + PriceFilter	Controlled inputs that update parent state
CartSummary.jsx	                Show item count + total price; decrement and reset actions
StatusMessage.jsx	            Shows correct message based on state (loading, error, or empty)