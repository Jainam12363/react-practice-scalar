function Hello(){

    let text= 'scalar' //this can be used in jsx using {}

    function display(){  //even a function can be used in jsx using {}
        return 'virat'
    }
    return (
        <h1>Hello From hello component {10+20} {text} {display()}</h1>
    )
}
export default Hello