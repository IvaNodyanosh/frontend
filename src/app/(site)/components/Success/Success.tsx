import styles from "./Success.module.scss";
import classNames from "classnames";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  FreeMode,
  Grid,
  A11y,
} from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/keyboard";
import "swiper/scss/mousewheel";
import "swiper/scss/grid";

export default function Success(): React.ReactNode {
  return (
    <section>
      <div className={classNames("container", "success")}>
        <div className={styles.container}>
          <div>
            <img src="ms-portrait.png" alt="" className={styles.photo} />
          </div>
          <div className={styles.box}>
            <h2 className={styles.header}>PRACOVNÍ ÚSPĚCHY</h2>
            <div className={styles.text_box}>
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Keyboard,
                  Mousewheel,
                  FreeMode,
                  Grid,
                  A11y,
                ]}
                navigation
                loopAddBlankSlides={true}
                pagination={{ clickable: true }}
                grabCursor={true}
                freeMode={true}
                keyboard={{
                  enabled: true,
                  onlyInViewport: true,
                  pageUpDown: true,
                }}
                mousewheel={{
                  sensitivity: 1,
                }}
                grid={{
                  fill: "row",
                  rows: 2,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.item}>
                    <h4>2013</h4>
                    <h3 className={styles.exhibitions_header}>VÝSTAVY</h3>
                    <p className={styles.text}>
                      <span className={styles.text_span}>
                        Letní sklářská dílna, Střední uměleckoprůmyslová škola
                        sklářská Železný Brod
                      </span>
                      <span>Muzeum Karkonoskie w Jeleniej Górze (Polsko)</span>
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.item}>
                    <h4>2010</h4>
                    <h3 className={styles.exhibitions_header}>VÝSTAVY</h3>
                    <p className={styles.text}>
                      <span className={styles.text_span}>
                        100 % Design, Šanghaj (Čína)
                      </span>
                      <span> Maison & Objet, Paříž (Francie)</span>
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.item}>
                    <h4>2009</h4>
                    <h3 className={styles.exhibitions_header}>VÝSTAVA</h3>
                    <p>Maison & Objet, Paříž (Francie)</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.item}>
                    <h4>2001</h4>
                    <h3 className={styles.exhibitions_header}>VÝSTAVA</h3>
                    <p>Riedlova vila, Desná</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.item}>
                    <h4>1996</h4>
                    <h3 className={styles.exhibitions_header}>VÝSTAVA</h3>
                    <p>Řemeslo a Umění ve skle, Sklářské muzeum Nový Bor</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.item}>
                    <h4>1995</h4>
                    <h3 className={styles.exhibitions_header}>VÝSTAVA</h3>
                    <p>
                      MACEF, Mezinárodní výstava vybavení domácnosti, Sbírka
                      skleněných psacích per, účast pod společností Skloexport,
                      Milán (Itálie)
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.item}>
                    <h4>1992</h4>
                    <h3 className={styles.exhibitions_header}>VÝSTAVA</h3>
                    <p>Řemeslo a Umění ve skle, Sklářské muzeum Nový Bor</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
