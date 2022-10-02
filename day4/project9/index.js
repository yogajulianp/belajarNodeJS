const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//   }
//   type Address {
// 	name: String
// 	city: String
//   }
//   type Company {
// 	name: String
// 	addresses: [Address]
//   }
//   type Product {
//     name: String
// 	quantity: Int
// 	company: Company
//   }
//   type Query {
//     books: [Book]
// 	products: [Product]
//   }
//   type Mutation {
// 	jumlah(a: Int, b: Int): Int,
// 	kurang(a: Int, b: Int): Int
//   }

// `;
const db = require("./models");
db.sequelize.sync()
.then(()=> {
    console.log("sync db")
})
.catch((err)=>{
    console.log("error: " + err.message);
})

const Product = db.products;
const Op = db.Sequelize.Op;



// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const resolvers = {
	Query: {
	  products: () => {
		return Product.findAll()
		.then(products => {
			return products;
		})
		.catch(err => {
			return [];
		});
	  }
	},

	// createProduct(name: String, quantity: Int, price: Int): Product,
// 	getProduct(id: Int): Product,
// 	updateProduct(id: Int, name: String, quantity: Int, price: Int): Product,
// 	deleteProduct(id: Int): Product
	Mutation: {
		createProduct: (parent,{name, quantity, price}) => {
			var product ={
				name: name,
				quantity: quantity,
				price: price
			}
			return Product.create(product)
				.then(data => {
					return data;
					})
				.catch(err => {
					return {};
					});
		},
		getProduct: (parent,{id}) => {
			return Product.findByPk(id)
  				.then(detailProduct => {
					return detailProduct
				})
				.catch(err => {
					return {};
				});
		},
		updateProduct: (parent,{id, name, quantity, price}) => {
			var product ={
				name: name,
				quantity: quantity,
				price: price
			}
			return Product.update(product,{
				where: {id:id}
			})
			.then(num => {
				return {
				name: name,
				quantity: quantity,
				price: price
				}
			})
			.catch(err => {
				return {};
			});
		},
		deleteProduct: (parent,{id}) => {
			return Product.findByPk(id)
					.then(detailProduct =>{
						if(detailProduct) {
							return Product.destroy({
								where: {id:id}
							})
							.then(num => {
								return detailProduct;
							})
							.catch(err => {
								return {}
							});
						}else {
							return {};
						}					
					})
					.catch(err => {
						return{};
					});
		}
	}
  };


  const {
	ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');
  
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.

  const fs = require('fs');
  const path = require('path');
  const { products } = require('./models');
  const typeDefs = fs.readFileSync("./schema.graphql", "utf8").toString();

  const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: 'bounded',
	/**
	 * What's up with this embed: true option?
	 * These are our recommended settings for using AS;
	 * they aren't the defaults in AS3 for backwards-compatibility reasons but
	 * will be the defaults in AS4. For production environments, use
	 * ApolloServerPluginLandingPageProductionDefault instead.
	**/
	plugins: [
	  ApolloServerPluginLandingPageLocalDefault({ embed: true }),
	],
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
  });  