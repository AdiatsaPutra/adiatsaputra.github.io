<script setup lang="ts">
const props = defineProps({
  hasViewMore: { type: Boolean, required: true },
});
</script>

<template>
  <section id="projects">
    <div>
      <div class="flex flex-col md:flex-row text-white gap-4 justify-between items-center">
        <div class="flex flex-col text-white gap-4">
          <p class="text-4xl font-bold">My Projects</p>
          <p class="w-72">3 Years of experience deploying fast and scalable mobile, frontend and fullstack product with
            exceptional and smooth
            user experience
          </p>
        </div>
        <div class="flex flex-col-reverse md:flex-row gap-2 items-center">
          <div class="flex flex-col gap-2">
            <p>Featured Projects</p>
            <p class="text-4xl font-bold">18hole</p>
            <a :href="url">
              <div class="flex flex-row gap-2 items-center cursor-pointer">
                <Icon name="uil:download-alt" color="white" size="1.5em" class="cursor-pointer" />
                <p class="text-xs text-white mt-2 hover:text-primary hover:transition duration-300">
                  5k downloads (playstore)
                </p>
              </div>
            </a>
            <a href=""
              class="bg-purple-600 hover:bg-purple-900 transition duration-300 text-white py-2 px-5 text-center text-xs">
              View Project
            </a>
          </div>
          <img src="/featured.gif" alt="" width="400" style="mix-blend-mode: screen;">
        </div>
      </div>
      <!-- <p class="text-xl md:text-2xl font-bold text-white pb-7">Projects</p> -->
      <div class="flex flex-col gap-4 mt-16">
        <div class="flex flex-col md:flex-row gap-4">
          <HomeProjectCard title="18hole"
            desc="18 Hole is a golf application that makes it easy for players to know the progress of playing golf by converting the total score into a handicap index easily and quickly. With 18 holes, communication between golf players is also easier because there is a community feature that can connect golf players in it."
            image="https://ik.imagekit.io/nqy1et4e1/about.png?updatedAt=1697604263203" technology="Flutter" downloads="5k"
            url="https://play.google.com/store/apps/details?id=com.eighteenhole.gamatechno" :firstImage="true" />
          <HomeProjectCard title="Pastiangkut"
            desc="Pasti Angkut is a digital-based waste management platform, which helps and makes it easier for you in the waste disposal process. You don't have to bother sorting out your trash and throwing it to a remote location, just collect your trash and let us pick it up."
            image="https://ik.imagekit.io/nqy1et4e1/Group%20913.png?updatedAt=1700220224887" technology="Flutter"
            downloads="1k"
            url="https://play.google.com/store/apps/details?id=id.pastiangkut.customer&utm_source=website&utm_campaign=merdekasampah" />
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <HomeProjectCard title="MirotaKlik"
            desc="MirotaKlik is a an app to manage Mirota KSM product with checkin, checkout and manage stock."
            image="https://ik.imagekit.io/nqy1et4e1/a1.png?updatedAt=1700204362970" technology="Flutter" downloads=""
            url="" />
          <HomeProjectCard title="Orbit360" desc="Orbit360 is a student management app."
            image="https://ik.imagekit.io/nqy1et4e1/c1.png?updatedAt=1700204402332" technology="Flutter" downloads=""
            url="" />
          <HomeProjectCard title="MirotaKlik"
            desc="MirotaKlik is a an app to manage Mirota KSM product with checkin, checkout and manage stock."
            image="https://ik.imagekit.io/nqy1et4e1/b1.png?updatedAt=1700204386896" technology="Flutter" downloads=""
            url="" />
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <HomeProjectCard title="MirotaKlik"
            desc="MirotaKlik is a an app to manage Mirota KSM product with checkin, checkout and manage stock."
            image="https://ik.imagekit.io/nqy1et4e1/Group%20160.png?updatedAt=1700219598475" technology="Flutter"
            downloads="" url="" />
          <HomeProjectCard title="MirotaKlik"
            desc="MirotaKlik is a an app to manage Mirota KSM product with checkin, checkout and manage stock."
            image="https://ik.imagekit.io/nqy1et4e1/Group%20154.png?updatedAt=1700219074071" technology="Flutter"
            downloads="" url="" />
          <HomeProjectCard title="Taurus"
            desc="Taurus is an application that can make it easier for leasing to track vehicles paid in installments by partners so that it can provide information on vehicles that are in arrears"
            image="https://ik.imagekit.io/nqy1et4e1/d1.png?updatedAt=1700204410614" technology="NuxtJs, Golang, Mysql"
            downloads="" url="" />
        </div>
      </div>
      <!-- <div v-if="hasViewMore">
        <a href="/projects">
          <p class="text-white text-sm text-center pt-5 cursor-pointer hover:text-primary transition duration-300">
            View More
          </p>
        </a>
      </div> -->
    </div>
    <div class="mt-16 md:mt-56">
      <p class="text-4xl text-white text-center font-bold">Experience</p>
      <div class="flex flex-col items-center gap-4 mt-4">
        <div class="w-full md:w-7/12">
          <HomeExperience title="What is Flowbite?"
            body="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
            link="/docs/getting-started/introduction/" linkText="get started" />
          <HomeExperience title="What is Flowbite?"
            body="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
            link="/docs/getting-started/introduction/" linkText="get started" />
          <HomeExperience title="What is Flowbite?"
            body="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
            link="/docs/getting-started/introduction/" linkText="get started" />
        </div>
      </div>
    </div>
  </section>
</template>
