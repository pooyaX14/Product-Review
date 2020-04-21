const getProductsURL = CONFIG.getProducts;
const getProductsReviewsURL = CONFIG.getReviews;

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function createTextNode(value) {
  return document.createTextNode(value)
}

function slice(elements) {
  return Array.prototype.slice.call(elements)
}

class ProductList {
  constructor(el) {
    this.el = el;
    this.options;
    this.productList = []
    this.productReviewList = []
    this.values={}
    this.initialize();
    // this.selectOnChangeListener = this.selectOnChangeListener.bind(this)
  }
  initialize() {
    this.fetchProductfromApi();
    this.fetchProductsReview();
  }
  productURl(page) {
    return `https://reviews.s4san.now.sh/review-${page}.json`
  }
  fetchProductfromApi() {
    fetch(getProductsURL)
      .then((response) => response.json())
      .then((result) => {
        if(result){
          this.productList = [...result]       
          this.createCardForProducts();
      }
      })
      .catch((err) => {
        console.log(`Error occured. Try again! ${err}`)
      })
  }

  fetchProductsReview() {
    fetch(getProductsReviewsURL)
      .then((response) => response.json())
      .then((result) => {
        if(result){
          console.log(result)
          this.productReviewList = [result]
          this.createCardForReviews();
      }
    })
  }
  createCardForReviews(){
    this.productReviewList.map(({reviews, hasMorePage}) => {
      reviews.map(({userName, rating, text, title, created, id}) => {
        console.log(userName, rating, text, title,  created, id )
        const productReviewContainer = document.querySelector('#add-product-review');
   
        const productReview = document.createElement("div");
        productReview.id = id;
        productReview.className = "reviewCard"
        const ratingSpan = createNode('span')
        ratingSpan.innerHTML = rating
        if(rating >=4) {
          ratingSpan.style.color = '#00C853'    
        }
        else if(3 <= rating < 4) {
          ratingSpan.style.color = '#FFCA28'
        }
        else if(0 < rating < 3) {
          ratingSpan.style.color = '#D32F2F';
        }

        const description = createNode('div')
        description.innerHTML = text;

        const reviewTitle = createNode('h4')
        reviewTitle.innerHTML = title

        productReview.append(ratingSpan, description)

        productReviewContainer.append(productReview)
      })
      
      // if(hasMorePage) {
        
      //   productReviewContainer.addEventListener('scroll', function() {
      //     if (productReviewContainer.scrollTop + productReviewContainer.clientHeight >= productReviewContainer.scrollHeight) {
      //       fetchProductsReview(this.page++);
      //     }
      //   });
      // }
    })
  }
  // loadMore({ userName, rating, text, title, created, id}) {
    
  // }
  createCardForProducts(){
    const productList = document.querySelector('#products-list'); 
    this.productList.map(({id, title, productImage, rating, pricing}) => {
      const productItem = document.createElement("div")
      productItem.id = id
      productItem.className = "product"

      const productTitle = document.createElement("h3")
      productTitle.innerHTML = title;

      const image = document.createElement("img");
      image.src = productImage
      productItem.append(productTitle, image)
      productList.append(productItem);
    })  
  }
}

let productListPage = new ProductList()
