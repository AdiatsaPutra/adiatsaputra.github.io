<script setup lang="ts"></script>

<template>
  <section id="projects">
    <div>
      <p class="text-xl md:text-2xl font-bold text-white pb-10">Projects</p>
      <div class="flex flex-col gap-7">
        <HomeProjectCard
          title="18hole"
          desc="18 Hole is a golf application that makes it easy for players to know the progress of playing golf by converting the total score into a handicap index easily and quickly. With 18 holes, communication between golf players is also easier because there is a community feature that can connect golf players in it."
          image="https://18hole.id/wp-content/uploads/2022/02/img-header.png"
          technology="Flutter"
          downloads="5k"
          url="https://play.google.com/store/apps/details?id=com.eighteenhole.gamatechno"
        />
        <HomeProjectCard
          title="Pastiangkut"
          desc="Pasti Angkut is a digital-based waste management platform, which helps and makes it easier for you in the waste disposal process. You don't have to bother sorting out your trash and throwing it to a remote location, just collect your trash and let us pick it up."
          image="https://www.pastiangkut.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpastiangkut-banner-01.ed5bbab6.png&w=640&q=75"
          technology="Flutter"
          downloads="1k"
          url="https://play.google.com/store/apps/details?id=id.pastiangkut.customer&utm_source=website&utm_campaign=merdekasampah"
        />
        <HomeProjectCard
          title="MirotaKlik"
          desc="MirotaKlik is a an app to manage Mirota KSM product with checkin, checkout and manage stock."
          image="/mirota.png"
          technology="Flutter"
          downloads=""
          url=""
        />
        <HomeProjectCard
          title="Taurus"
          desc="Taurus is an application that can make it easier for leasing to track vehicles paid in installments by partners so that it can provide information on vehicles that are in arrears"
          image="/taurus.png"
          technology="NuxtJs, Golang, Mysql"
          downloads=""
          url=""
        />
      </div>
      <p
        class="text-white text-sm text-center pt-5 cursor-pointer hover:text-primary transition duration-300"
      >
        View More
      </p>
    </div>
  </section>
</template>
