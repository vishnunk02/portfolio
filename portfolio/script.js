var myidlist = ['htm', 'cs','boot','jsc','anglr','pyth','djo','rstapi','react','mysql','mongo']
function htmlClick(divnm) {
    for (i of myidlist) {
        if (i === divnm) {
            document.getElementById(i).style.display = 'contents'
        }
        else {
            document.getElementById(i).style.display = 'none'
        }
    }
}
function closeDiv(){
    for (i of myidlist) {
        document.getElementById(i).style.display = 'none'
    }
}