<template>
  <BlogWrapper>
    <div class="vp-page vp-blog">
      <BlogHero>
        <template #info="{ tagline, isFullScreen, text, alt }">
          <HitokotoBlogHero v-if="text" :text="text" :alt="alt" />
        </template>
        <template #bg>
          <BingHeroBackground />
        </template>
      </BlogHero>
      <div class="blog-page-wrapper">
        <main id="main-content" class="vp-blog-main friends round-avatar">
          <DropTransition appear :delay="0.16">
            <div class="theme-hope-content">
              <ProjectPanel :items="friends" />
            </div>
          </DropTransition>
          <DropTransition appear :delay="0.28">
            <MarkdownContent />
          </DropTransition>
        </main>

        <DropTransition appear :delay="0.4">
          <InfoPanel />
        </DropTransition>
      </div>
    </div>
  </BlogWrapper>
</template>

<script lang="ts" setup>
import BlogHero from 'vuepress-theme-hope/blog/components/BlogHero.js'
import BlogWrapper from 'vuepress-theme-hope/blog/components/BlogWrapper.js'
import InfoPanel from 'vuepress-theme-hope/blog/components/InfoPanel.js'
import ProjectPanel from 'vuepress-theme-hope/blog/components/ProjectPanel.js'
import MarkdownContent from 'vuepress-theme-hope/components/MarkdownContent.js'
import { DropTransition } from 'vuepress-theme-hope/components/transitions/DropTransition.js'
import BingHeroBackground from 'vuepress-theme-hope/presets/BingHeroBackground.js'
import HitokotoBlogHero from 'vuepress-theme-hope/presets/HitokotoBlogHero.js'

import 'vuepress-theme-hope/modules/blog/styles/home.scss'
import friends from "../friends"
</script>

<style lang="scss">
main.friends.round-avatar {
  .vp-project-card {
    img.vp-project-icon {
      border-radius: 9999px;
      height: 2em;
    }
    width: calc(50% - 40px);

    @media (max-width: 959px) {
      width: 100%
    }
  }
}
</style>
