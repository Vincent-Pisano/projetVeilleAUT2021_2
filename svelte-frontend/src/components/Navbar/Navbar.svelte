<script>
  import { getURL } from "../../Utils/URL";
  import { Link } from "svelte-routing";

  let url = getURL();
</script>

<nav>
  <Link to={url.LOGIN}>Login</Link>
  <Link to={url.SUBSCRIBE}>Subscribe</Link>
  <Link to={url.HOME}>Home</Link>
</nav>

<style>
    
</style>
