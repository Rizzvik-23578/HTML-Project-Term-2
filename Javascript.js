<script>
var coll = document.getElementsByClassName("collapsible");
var len = col1.length
var i;

for (i=0; i<len; i++) {
	
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
</script>

