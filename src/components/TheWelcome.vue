<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div class="card mx-auto" style="width: fit-content;">
      <div class="card-header">
        <h2 class="text-center">Kleiderspende Formular</h2>
      </div>
      <div class="card-body">
        <div v-if="!isFormSubmitted">
          <form @submit.prevent="submitForm" class="mt-5">
            <h2 class="text-center">Kleiderspende Formular</h2>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="radio" value="office" v-model="donationType" />
                <label class="form-check-label">
                  Übergabe an der Geschäftsstelle
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" value="pickup" v-model="donationType" />
                <label class="form-check-label">
                  Abholung
                </label>
              </div>
            </div>
            <div class="form-group">
              <label>
                Art der Kleidung:
                <select class="form-control" v-model="clothingType">
                  <option value="shirts">Hemden</option>
                  <option value="pants">Hosen</option>
                </select>
              </label>
            </div>
            <div class="form-group">
              <label>
                Krisengebiet:
                <select class="form-control" v-model="crisisArea">
                  <option value="area1">Gebiet 1</option>
                  <option value="area2">Gebiet 2</option>
                </select>
              </label>
            </div>
            <div v-if="donationType === 'pickup'">
              <div class="form-group">
                <label>
                  Abholadresse:
                  <input type="text" class="form-control" v-model="pickupAddress" />
                </label>
              </div>
              <div class="form-group">
                <label>
                  Postleitzahl:
                  <input type="text" class="form-control" v-model="zipCode" />
                </label>
              </div>
            </div>
           
          <button type="submit" class="btn btn-primary" :disabled="!isFormValid">Registrieren</button>

          </form>
        </div>
        <div v-else>
          <h2>Form Submitted Successfully</h2>
          <p><strong>Donation Type:</strong> {{ donationType }}</p>
          <p><strong>Clothing Type:</strong> {{ clothingType }}</p>
          <p><strong>Crisis Area:</strong> {{ crisisArea }}</p>
          <p v-if="donationType === 'pickup'"><strong>Pickup Address:</strong> {{ pickupAddress }}</p>
          <p v-if="donationType === 'pickup'"><strong>Zip Code:</strong> {{ zipCode }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { projectFirestore } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      isFormSubmitted: false,
      donationType: "",
      clothingType: "",
      crisisArea: "",
      pickupAddress: "",
      zipCode: "",
    };
  },
  
computed: {
  isFormValid() {
    if (this.donationType === 'pickup') {
      return this.clothingType && this.crisisArea && this.pickupAddress && this.isValidZipCode();
    }
    return this.clothingType && this.crisisArea;
  }
},

  methods: {
    isValidZipCode() {
      return this.zipCode.startsWith("12");
    },
    submitForm() {
      if (this.donationType === "pickup" && !this.isValidZipCode()) {
        alert("Invalid Zip Code.");
        return;
      }
      const donationData = {
        donationType: this.donationType,
        clothingType: this.clothingType,
        crisisArea: this.crisisArea,
        pickupAddress: this.pickupAddress,
        zipCode: this.zipCode,
      };
      addDoc(collection(projectFirestore, "donations"), donationData)
  .then(() => {
    console.log("Donation data submitted successfully");
    this.isFormSubmitted = true;
  })
  .catch(error => {
    console.error("Error submitting donation data: ", error);
  });
      
      
    },
  },
};
</script>
