function itemsApi(items) {

    var req = new XMLHttpRequest();
    var url = `https://fakestoreapi.com/products/category/${items}`;
    req.open("GET", url, true);
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                var result = (JSON.parse(req.responseText));
                console.log(result);
                var items = document.getElementById('my-category-items');
                items.innerHTML = '';

                items.innerHTML = result.map((item) => {
                    return `
                    <div class="col-md-4">
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src="${item.image}">
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="shop-single.html" class="h3 text-decoration-none">${item.title}</a>
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
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
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p class="text-center mb-0">$${item.price}</p>
                            </div>
                        </div>
                    </div>                   `;
                }
                ).join('');

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

function getCategoryData(){
    const params = new URLSearchParams(window.location.search);
      const data = {};
      for (const [key, value] of params.entries()) {
        data[key] = value;
      }
    console.log(data.category);
    itemsApi(data.category);
}