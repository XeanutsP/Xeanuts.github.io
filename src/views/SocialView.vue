<script setup lang="ts">
import SocialItem from '@/components/SocialItem.vue'
</script>

<template>
  <div class="socialContainer">
    <SocialItem>
      <template v-slot:profileImg>
        <img
          src="https://pbs.twimg.com/profile_images/1519164234969468928/gbNwEc5u_400x400.jpg"
          alt="../assets/twitterIcon.svg"
        />
      </template>
      <template v-slot:socialName>
        <h4>Twitter</h4>
      </template>
      <template v-slot:accName>
        <span>XeanutsP</span>
      </template>
    </SocialItem>
    <SocialItem>
      <template v-slot:profileImg>
        <img src="" alt="../assets/twitterIcon.svg" />
      </template>
      <template v-slot:socialName>
        <h4>Facebook</h4>
      </template>
      <template v-slot:accName>
        <span>Xea Xeanuts</span>
      </template>
    </SocialItem>
    <SocialItem>
      <template v-slot:profileImg>
        <img src="https://cdn.discordapp.com/avatars/612740931732373505/68114c0c540381a1eb88576069f01acd.png?size=240" alt="../assets/twitterIcon.svg" />
      </template>
      <template v-slot:socialName>
        <h4>Discord</h4>
      </template>
      <template v-slot:accName>
        <span>xeaistypicalmanasitisbutnonumber</span>
      </template>
    </SocialItem>
    <div id="asn">
      <!-- End of the line-->
      <span>and so on...</span>
    </div>
  </div>
</template>

<style>
@media (prefers-color-scheme: light) {
  .socialContainer {
    background-image: linear-gradient(331deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
  }
}
@media (prefers-color-scheme: dark) {
  #asn span{
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 2px;
    border-radius: 8px;
    opacity: 0.6;
    background-color: gray;
    color: white;
  }
  .socialContainer {
    background-image: linear-gradient(145deg, rgba(0, 0, 28, 1) 0%, rgb(110, 18, 202) 100%);
  }
}
.socialContainer {
  padding: 12px;
  display: flexbox;
  justify-content: center;
  min-width: max-content;
  min-height: max-content;
  max-width: 42vw;
  border-radius: 16px;
}
img {
  border-radius: 12vw;
  width: 50px;
  height: auto;
  margin: 4px;
}
.socialContainer h4 {
  font-size: large;
  font-weight: 500;
}
.socialContainer span {
  font-weight: 200;
}
#asn {
  text-align: center;
  width:auto;
  margin: 0;
  margin-top: 14px;
}
</style>
