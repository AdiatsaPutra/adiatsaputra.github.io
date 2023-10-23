<script setup lang="ts">
const props = defineProps({
  hasViewMore: { type: Boolean, required: true },
});
</script>

<template>
  <section id="projects">
    <div>
      <p class="text-xl md:text-2xl font-bold text-white pb-10">Projects</p>
      <div class="flex flex-col gap-10 md:gap-20">
        <HomeProjectCard
          title="18hole"
          desc="18 Hole is a golf application that makes it easy for players to know the progress of playing golf by converting the total score into a handicap index easily and quickly. With 18 holes, communication between golf players is also easier because there is a community feature that can connect golf players in it."
          image="https://ik.imagekit.io/nqy1et4e1/about.png?updatedAt=1697604263203"
          technology="Flutter"
          downloads="5k"
          url="https://play.google.com/store/apps/details?id=com.eighteenhole.gamatechno"
        />
        <HomeProjectCard
          title="Pastiangkut"
          desc="Pasti Angkut is a digital-based waste management platform, which helps and makes it easier for you in the waste disposal process. You don't have to bother sorting out your trash and throwing it to a remote location, just collect your trash and let us pick it up."
          image="https://ik.imagekit.io/nqy1et4e1/pastiangkut.png?updatedAt=1697603065797"
          technology="Flutter"
          downloads="1k"
          url="https://play.google.com/store/apps/details?id=id.pastiangkut.customer&utm_source=website&utm_campaign=merdekasampah"
        />
        <HomeProjectCard
          title="MirotaKlik"
          desc="MirotaKlik is a an app to manage Mirota KSM product with checkin, checkout and manage stock."
          image="https://ik.imagekit.io/nqy1et4e1/mirota.png?updatedAt=1697603069037"
          technology="Flutter"
          downloads=""
          url=""
        />
        <HomeProjectCard
          title="Orbit360"
          desc="Orbit360 is a student management app."
          image="https://ik.imagekit.io/nqy1et4e1/orbit.png?updatedAt=1697603071404"
          technology="Flutter"
          downloads=""
          url=""
        />
        <HomeProjectCard
          title="Taurus"
          desc="Taurus is an application that can make it easier for leasing to track vehicles paid in installments by partners so that it can provide information on vehicles that are in arrears"
          image="https://ik.imagekit.io/nqy1et4e1/taurus.png?updatedAt=1697603068610"
          technology="NuxtJs, Golang, Mysql"
          downloads=""
          url=""
        />
      </div>
      <div v-if="hasViewMore">
        <a href="/projects">
          <p
            class="text-white text-sm text-center pt-5 cursor-pointer hover:text-primary transition duration-300"
          >
            View More
          </p>
        </a>
      </div>
    </div>
  </section>
</template>
