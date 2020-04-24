function missingNum(arr, lb, ub) {
  let l = 0  
  let r = arr.length-1
  while(l<=r) {
      let mid = Math.floor((l+r)/2);
     
        if ((arr[mid] - arr[l]) !== (mid - l)) {
            /* there is a hole in the l half */
            if ((mid - l) === 1 && (arr[mid] - arr[l] > 1)) {
                return (arr[mid] - 1);
            }

            r = mid;
        } else if ((arr[r] - arr[mid]) !== (r - mid)) {
            /* there is a hole in the second half */
            if ((r - mid) === 1 && (arr[r] - arr[mid] > 1)) {
                return (arr[mid] + 1);
            }

            l = mid;
        } else {
            return -1;
        }

        // mid = (l + r)/2;
    }
    return -1;
}
  // let mid = Math.floor((lb+ub)/2);

  
  // let leftArr = arr.slice(lb, mid+1) 
  // let rightArr = arr.slice(mid, ub+1)
  // console.log(leftArr, rightArr)
    // if(leftArr.length < mid){
    //   missingNum(arr, lb, mid)
      
    // }else if(rightArr.length < ub){
    //   missingNum(arr, mid+1, ub)
    // }
let items = [4, 5,7]
let missing = missingNum(items, 0, items.length-1)
console.log(missing)