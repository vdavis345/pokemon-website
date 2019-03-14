
$( document ).ready(function() {
   
$("#grab-pokemons").on("click", function(){
    const creature = $("#textBox").val()
    console.log(creature)

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + creature + "/",
    
    
        success : function(data){
        console.log(data)
        const power = data.name
        const weight = data.weight
        const height = data.height
        const pics = data.sprites.back_default
        console.log(pics)
        $("#pics").attr('src', pics)
       
        $("#power").html(power)
        $("#weight").html(weight + " pd")
        $("#height").html(height + "ft")
        // $("#pics").html(pics)
        },
    
        error : function(request,error){
            console.log(error)
            console.log(request)
        }
    
       })
    
})
 
  

});