<template>
  <div class="home">
    <section id="services" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Services</h2>
          <span>Services</span>
          <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12" v-for="(item,index) in row" :key="index">
            <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
              <div class="icon color-1">
              <i :class="item.icon"></i>
              </div>
              <h4>{{item.title}}</h4>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      row:[
       {
        icon: 'el-icon-edit',
        title: 'Content Writing',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
      }, {
        icon: 'el-icon-delete',
        title: 'Content Writing',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
      }, {
        icon: 'el-icon-eleme',
        title: 'Content Writing',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
      }, {
        icon: 'el-icon-user',
        title: 'Content Writing',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
      }, {
        icon: 'el-icon-goods',
        title: 'Content Writing',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
      }, {
        icon: 'el-icon-help',
        title: 'Content Writing',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
      },

      ]
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .home {
  height: 100%;
    #services {
      padding: 80px 0;
      .container {
        @media screen and (min-width: 960px) {
          max-width: 720px;
        }
        width: 100%;
        padding: 0 15px;
        margin: 0 auto;
        .section-header {
          text-align:center;
          position: relative;
          margin-bottom: 40px;
          h2 {
            @media screen and (min-width: 768) and (max-width: 1024) {
              font-size: 24px;
            }
             @media screen and (min-width: 1024) {
              font-size: 36px;
            }
            text-transform: uppercase;
            margin-bottom: 20px;
            font-weight: 700;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: #263238;
            position: relative;
            &::before {
              content: '';
              background-color: #f97794;
              position: absolute;
              bottom: -8px;
              width: 80px;
              height: 2px;
              transition: .3s;

            }
          }
          span {
            font-size: 60px;
            color: rgba($color: #000000, $alpha: .07);
            position: absolute;
            z-index: 2;
            top: 7px;
            left: 0;
            width: 100%;
          }
          p {
            font-size: 16px;
            line-height: 24px;
            color: #546e7a;
          }
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
          @media screen and (min-width: 768px){
            .col-md-6 {
              flex: 0,0,50%;
              max-width: 50%;
            }
          }
          .services-item {
            padding: 30px 15px;
            border-radius: 4px;
            text-align: center;
            margin-bottom: 30px;
            position: relative;
            .icon {
              text-align: center;
              height: 39px;
              line-height: 39px;
              i {
                font-size: 36px;
              }
              h4 {
                margin: 15px 0;
              }
              p {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
</style>
