// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  uniqueKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  uniqueKey: 'id'
});


// Product.hasOne(Category, {
//   foreignKey: 'driver_id',
//   onDelete: 'CASCADE',
// });
// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

// // Define a Driver as having many Cars, thus creating a foreign key in the `car` table
// Driver.hasMany(Car, {
//   foreignKey: 'driver_id',
//   onDelete: 'CASCADE',
// });

// // The association can also be created from the Car side
// Car.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
