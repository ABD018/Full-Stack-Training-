function executeAjax(url, recur) 
{
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.onreadystatechange = function () 
            {
                if (req.readyState == 4) 
                    {
                    if (req.status == 200) 
                        {
                        var parsed = JSON.parse(req.responseText);
                        recur(parsed);
                    } 
                    else 
                    {
                        alert("An error has occurred: " + req.statusText);
                    }
                }
            };
            req.send(null);
        }

function generateRandom(total, count) 
{
    const arr = [];
    while (arr.length < count) 
        {
        const rand = Math.floor(Math.random() * total);
        if (!arr.includes(rand)) 
        {
            arr.push(rand);
        }
    }
    return arr;
}

function populateCategories(categories) 
{
    var dropdown = document.getElementById("categoryDropdown");

    for (var i in categories) 
        {
        var category = categories[i];
        dropdown.innerHTML += `<a href="shop.html?category=${encodeURIComponent(category)}" class="text-capitalize")">${category}</a>`;
    }
}

function categoryList(categories)
{    
    var categoryList = document.getElementById("categorylist");
    for (var i in categories) 
        {
        var category = categories[i];
        categoryList.innerHTML += `<li class="pb-3">
                        <a class="collapsed d-flex justify-content-between h3 text-decoration-none text-capitalize category-link" id="myLink"  href="#" onclick="loadProducts('${category.replace(/'/g, "\\'")}')">
                            ${category}
                        </a>
                    </li>`;
    }
}

// categorical section

var image = [
    { category: "Electronics",
      source: "assets/img/elec.webp" },
    { category: "Jewelery", 
      source: "assets/img/jewel.webp" },
    { category: "Men's Clothing", 
      source: "assets/img/mens.jpg" },
    { category: "Women's Clothing", 
      source: "assets/img/women.jpg" }
];

function showCategories() 
{
    let c = document.getElementById("circle"); 
    let index = generateRandom(image.length, 3); 

    for (let i = 0; i < index.length; i++) 
        {
        const { category, source } = image[index[i]];
        c.innerHTML += `<div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="${source}" class="rounded-circle img-fluid border"></a>
                <h5 class="text-center mt-3 mb-3">${category}</h5>
                <p class="text-center"><a class="btn btn-success category-link">Go Shop</a></p>
            </div>`;

    }
}

// Slider

function displayProducts(products) 
{
    var carouselInner = document.getElementById("carouselInner");
    var row= document.getElementById("row");

    let array = generateRandom(products.length, 3);
    for (let i = 0; i < array.length; i++) 
        {
        var product = products[array[i]];
        carouselInner.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="container ">
                    <div class="row p-5">
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last ">
                            <img class="img-fluid fluid blend" src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left align-self-center">
                                <h1 class="h1">${product.title}</h1>
                                <p>${product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }

        //featured products
           
            let newarr=generateRandom(products.length,3);
            for(let j=0;j<newarr.length;j++)
                {
            var product=products[newarr[j]];
            row.innerHTML+=`<div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="${product.image}" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    ${renderRating(product.rating.rate)}
                                </li>
                                <li class="text-muted text-right">$${product.price}</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">${product.title}</a>
                            <p class="card-text">
                                ${product.description}
                            </p>
                            <p class="text-muted">Reviews (${product.rating.count})</p>
                        </div>
                    </div>
                </div>`
            }

}

function categoryClick(products)
{
    var category_val = document.getElementById("searchCategory");
    category_val.innerHTML='';
    let array = generateRandom(products.length, 9);
    for (let i = 0; i < array.length; i++) 
        {
        var product = products[array[i]];
        
        category_val.innerHTML += `<div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0" id="cards">
                    <div class="card rounded-0">
                        <img class="card-img rounded-0 img-fluid" src="${product.image}" alt="${product.title}">
                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled">
                                <li><a class="btn btn-success text-white" href="shop-single.html?id=${product.id}"><i class="far fa-heart"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html?id=${product.id}"><i class="far fa-eye"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html?id=${product.id}"><i class="fas fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="shop-single.html?id=${product.id}" class="h3 text-decoration-none">${product.title}</a>
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                ${renderRating(product.rating.rate)}
                            </li>
                        </ul>
                        <p class="text-center mb-0">$${product.price}</p>
                    </div>
                </div>
                </div>`;
            }

}

function loadProducts(category) 
{
    var api = `https://fakestoreapi.com/products/category/${category}`;
    console.log('Fetching products for category:', category);

    executeAjax(api, function(products) 
    {
        var productContainer = document.getElementById('searchCategory');
        productContainer.innerHTML = ''; 

        products.forEach(product => 
            {
            var productCard = document.createElement('div');
            productCard.className = 'col-md-4';
            productCard.innerHTML = `
                <div class="card mb-4 product-wap rounded-0" id="cards">
                    <div class="card rounded-0">
                        <img class="card-img rounded-0 img-fluid" src="${product.image}" alt="${product.title}">
                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled">
                                <li><a class="btn btn-success text-white" href="shop-single.html?id=${product.id}"><i class="far fa-heart"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html?id=${product.id}"><i class="far fa-eye"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html?id=${product.id}"><i class="fas fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="shop-single.html?id=${product.id}" class="h3 text-decoration-none">${product.title}</a>
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                ${renderRating(product.rating.rate)}
                            </li>
                        </ul>
                        <p class="text-center mb-0">$${product.price}</p>
                    </div>
                </div>`;
            productContainer.appendChild(productCard);
        });
    });
}

// Function to display related products
function displayRelatedProducts(category, currentProductId) 
{
    var api = `https://fakestoreapi.com/products/category/${category}`;

    executeAjax(api, function(products) 
    {
        // Filter out the current product
        var relatedProducts = products.filter(product => product.id !== currentProductId);
        
        // Display the related products
        var relatedProductsContainer = document.getElementById('carousel-related-product');
        relatedProductsContainer.innerHTML = ''; // Clear existing content

        relatedProducts.forEach(product => 
            {
            var productCard = document.createElement('div');
            productCard.className = 'p-2 pb-3';
            productCard.innerHTML = `
                <div class="product-wap card rounded-0">
                    <div class="card rounded-0">
                        <img class="card-img rounded-0 img-fluid" src="${product.image}" alt="${product.title}">
                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled">
                                <li><a class="btn btn-success text-white" href="shop-single.html?id=${product.id}"><i class="far fa-heart"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html?id=${product.id}"><i class="far fa-eye"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html?id=${product.id}"><i class="fas fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="shop-single.html?id=${product.id}" class="h3 text-decoration-none">${product.title}</a>
                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <li>All sizes available</li>
                            <li class="pt-2">
                                <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                            </li>
                        </ul>
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                ${renderRating(product.rating.rate)}
                            </li>
                        </ul>
                        <p class="text-center mb-0">$${product.price}</p>
                    </div>
                </div>`;
            relatedProductsContainer.appendChild(productCard);

        });
    });
}

// Function to call when the product page loads
document.addEventListener("DOMContentLoaded", function() 
{
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId) 
        {
        // Fetch the product details to get its category
        executeAjax(`https://fakestoreapi.com/products/${productId}`, function(product) {
            const category = product.category;
            displayRelatedProducts(category, productId);
        });
    }
});

function renderRating(rating) 
{
    var stars = '';
    var fullStars = Math.floor(rating); 
    var halfStar = rating % 1 >= 0.5; 

    for (var i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="text-warning fa fa-star"></i> ';
        } else if (halfStar && i === fullStars) {
            stars += '<i class="text-warning fa fa-star-half"></i> ';
        } else {
            stars += '<i class="text-muted fa fa-star"></i> ';
        }
    }

    return stars;
}


document.addEventListener("DOMContentLoaded", function() 
{
    //fetching product id
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // fetch categories of shop single
    
    const category = urlParams.get('category');

    const productid = parseInt(urlParams.get('id'));

    // shop-single.html
    executeAjax(`https://fakestoreapi.com/products/${productId}`, function(product) {
        var details=document.getElementById('details');
        details.innerHTML='';
        details.innerHTML+=`<div class="col-lg-5 mt-5">
                    <div class="card mb-3 blend" >
                        <img class="card-img img-fluid " src="${product.image}" alt="Card image cap" id="product-detail">
                    </div>
                    <div class="row" >
                        <!--Start Controls-->
                        <div class="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i class="text-dark fas fa-chevron-left"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                        </div>
                        <!--End Controls-->
                        <!--Start Carousel Wrapper-->
                        <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                            <!--Start Slides-->
                            <div class="carousel-inner product-links-wap" role="listbox">

                                <!--First slide-->
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 1">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 2">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 3">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!--/.First slide-->

                                <!--Second slide-->
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 4">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 5">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 6">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!--/.Second slide-->

                                <!--Third slide-->
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 7">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 8">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src="${product.image}" alt="Product Image 9">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!--/.Third slide-->
                            </div>
                            <!--End Slides-->
                        </div>
                        <!--End Carousel Wrapper-->
                        <!--Start Controls-->
                        <div class="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="next">
                                <i class="text-dark fas fa-chevron-right"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <!--End Controls-->
                    </div>
                </div>
                <!-- col end -->
                <div class="col-lg-7 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="h2">${product.title}</h1>
                            <p class="h3 py-2">$${product.price}</p>
                            <p class="py-2">
                                ${renderRating(product.rating.rate)}
                                <span class="list-inline-item text-dark">Rating ${product.rating.rate} | ${product.rating.count} Reviews</span>
                            </p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Category:</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted text-capitalized"><strong>${product.category}</strong></p>
                                </li>
                            </ul>

                            <h6>Description:</h6>
                            <p>${product.description}</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Avaliable Color :</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>White / Black</strong></p>
                                </li>
                            </ul>

                            <form action="" method="GET">
                                <input type="hidden" name="product-title" value="Activewear">
                                <div class="row">
                                    <div class="col-auto">
                                        <ul class="list-inline pb-3">
                                            <li class="list-inline-item">Size :
                                                <input type="hidden" name="product-size" id="product-size" value="S">
                                            </li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">S</span></li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">M</span></li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">L</span></li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">XL</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-auto">
                                        <ul class="list-inline pb-3">
                                            <li class="list-inline-item text-right">
                                                Quantity
                                                <input type="hidden" name="product-quanity" id="product-quanity" value="1">
                                            </li>
                                            <li class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                                            <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">1</span></li>
                                            <li class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row pb-3">
                                    <div class="col d-grid">
                                        <button type="submit" class="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                    </div>
                                    <div class="col d-grid">
                                        <button type="submit" class="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>`
    });

    
    if (category) 
    {
        loadProducts(category);
    }
    else 
    {
        executeAjax("https://fakestoreapi.com/products",categoryClick);
    }
 
    if (productid) 
        {
        // Fetch the product details to get its category
        executeAjax(`https://fakestoreapi.com/products/${productid}`, function(product) {
            const category = product.category;
            displayRelatedProducts(category, productid);
        });
    }

});

executeAjax("https://fakestoreapi.com/products/categories", populateCategories);
executeAjax("https://fakestoreapi.com/products/categories", categoryList);
executeAjax("https://fakestoreapi.com/products", displayProducts);

document.addEventListener("DOMContentLoaded", function() {
    showCategories();
});



