function porductApi() {
    var req = new XMLHttpRequest();
    var url = "https://fakestoreapi.com/products";
    req.open("GET", url, true);
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                var result = JSON.parse(req.responseText);

                let indices = getRandomIndices(result.length, 3);
                let randomProducts = indices.map(index => result[index]);
                
                var myCarousel = document.getElementById("my-carousel");
                myCarousel.innerHTML = "";
                
                randomProducts.forEach((product, index) => {
                    var activeClass = index === 0 ? 'active' : '';
                    myCarousel.innerHTML += `
                        <div class="carousel-item ${activeClass}">
                            <div class="container">
                                <div class="row p-5">
                                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img class="img-fluid" src="${product.image}" alt="Product Image">
                                    </div>
                                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                                        <div class="text-align-left align-self-center">
                                            <h3>${product.title}</h3>
                                            <p>
                                                ${product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                });
        
        
                indices = getRandomIndices(result.length, 3);
                let randomFeatureProducts = indices.map(index => result[index]);
        
                let featuredProducts = document.getElementById("my-featured-products");
                featuredProducts.innerHTML = "";
        
                randomFeatureProducts.forEach((product) => {
                    featuredProducts.innerHTML += `
                                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <a href="shop-single.html">
                                    <img src="${product.image}" class="card-img-top" alt="..." width="150px" height="300px">
                                </a>
                                <div class="card-body">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
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
                        </div>`;
                }
                );

            } else {
                console.log("Error: " + req.statusText);
            }
        }
    };
    req.send(); 
}


function getRandomIndices(length, num) {
    let indices = new Set();
    while (indices.size < num) {
        indices.add(Math.floor(Math.random() * length));
    }
    return Array.from(indices);
}


function productsCategoryApi() {
    var req = new XMLHttpRequest();
    var url = "https://fakestoreapi.com/products/categories";
    req.open("GET", url, true);
    req.onreadystatechange = () => {
    if (req.readyState === 4) {
        if (req.status === 200) {
            
            var result = JSON.parse(req.responseText);

            var categoriesDropDown = document.getElementById("my-categoryDropDown");
            categoriesDropDown.innerHTML = "";
            
            result.forEach((category) => {
                categoriesDropDown.innerHTML += `
                    <a class="dropdown-item text-capitalize" href="shop.html?category=${encodeURIComponent(category)}">${category}</a>`;
            });
            
            
            var myCategoryOfMonth = document.getElementById("my-categoty-ofMonth");
            myCategoryOfMonth.innerHTML = "";  

            var indices = getRandomIndices(result.length, 3);
            var randomCategories = indices.map(index => result[index]);

            randomCategories.forEach((category) => {
                myCategoryOfMonth.innerHTML += ` <div class="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src="./assets/img/${category}.jpg" class="rounded-circle img-fluid border"></a>
                    <h5 class="text-center mt-3 mb-3 text-capitalize">${category}</h5>
                    <p class="text-center"><a href="shop.html?category=${encodeURIComponent(category)}" class="btn btn-success">Go Shop</a></p>
                </div>`;
            }
                );



        } else {
            console.log("Error: " + req.statusText);
        }
    }
    };
    req.send();
}

function loadPage() {
    porductApi();
    productsCategoryApi();
}