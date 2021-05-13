
<script>
  import { session } from '$lib/store/session.js'
  import { fetch2 } from '$lib/fetch2.js'
  import Toast from '$lib/toast.js'
  import { goto } from '$app/navigation';
  const toast = new Toast({duration:2000}) 
  let loading = false
  let obj = {
    email:'vujovichigor@gmail.com',
    password:''
  }

  $:if ($session.token && $session.isLogedIn){
    goto('/')
    //toast.success('Welcome back');
  }

  async function tryLogin(){
    loading = true
    var [resp,err] = await fetch2('post','auth', obj)
    loading = false
    if (!resp || !resp.token) { toast.error('Wrong credentials'); return }
    toast.success('Welcome'); 
    $session = { ...resp.results, isLogedIn:true, token:resp.token }
  }

  function handleKeydown(event) {
    if (event.key == 'Enter') tryLogin()
  }
</script>
  <svelte:window on:keydown={handleKeydown}/>
  <div class="jumbotron jumbotron-fluid">
    <div class="container" style="max-width: 30rem !important">
      <img class="img-fluid mx-auto d-block" style="margin-bottom: 9rem!important; max-width: 13rem;" src="/images/logo-logo.png" alt="logo">
<!--      <h1 class="mb-3 text-center">Please log in</h1> -->

      <div class="form-floating mb-3">
        <input bind:value={obj.email} type="email" class="form-control" id="floatingInput" placeholder="email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
          <input bind:value={obj.password} type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
      </div>

      <button disabled ={loading} type="button" on:click={tryLogin} class="btn btn-primary btn-block d-block mx-auto mt-5">
        {#if loading}
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        {/if}
        Prijavi se
      </button>      

          <!--
          <div class="text-center">
            <p>or</p>
            <a href="" class="btn btn-success">Create account</a>
            <p class="small">
              <a href="#">Have you forgotten your account details?</a>
            </p>
          </div>
            -->

    </div>
  </div>
  <!--
<form style="display: flex;
flex-flow: column;
align-items: center;">
    <div class="form-floating mb-3" style="width:75vw">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3" style="width:75vw">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
    <button style="width:15rem" class="button btn-primary">Prijavi se</button>
</form>-->