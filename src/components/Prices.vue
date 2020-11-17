<template>
  <div class="prices">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-4">
          <h5 class="text-center font-weight-bold">Prices</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 text-center">
          <h6 class="font-weight-bold">The first 50 capsules:</h6>
          <table class="table table-striped text-left">
            <tbody>
              <tr>
                <td>Ristretto = 2p</td>
              </tr>
              <tr>
                <td>Espresso = 4p</td>
              </tr>
              <tr>
                <td>Lungo = 6p</td>
              </tr>
            </tbody>
          </table>
          <img
            alt="Coffee Beans"
            src="../assets/images/coffee-bean-white-transparent.png"
            class="coffee-beans"
          />
        </div>
        <div class="col-md-4 text-center">
          <h6 class="font-weight-bold">Capsules 5-500:</h6>
          <table class="table table-striped text-left">
            <tbody>
              <tr>
                <td>Ristretto = 3p</td>
              </tr>
              <tr>
                <td>Espresso = 6p</td>
              </tr>
              <tr>
                <td>Lungo = 9p</td>
              </tr>
            </tbody>
          </table>
          <img
            alt="Coffee Beans"
            src="../assets/images/coffee-bean-white-transparent.png"
            class="coffee-beans"
          />
        </div>
        <div class="col-md-4 text-center">
          <h6 class="font-weight-bold">Capsules 501+:</h6>
          <table class="table table-striped text-left">
            <tbody>
              <tr>
                <td>Ristretto = 5p</td>
              </tr>
              <tr>
                <td>Espresso = 10p</td>
              </tr>
              <tr>
                <td>Lungo = 15p</td>
              </tr>
            </tbody>
          </table>
          <img
            alt="Coffee Beans"
            src="../assets/images/coffee-bean-white-transparent.png"
            class="coffee-beans"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prices"
};
</script>
