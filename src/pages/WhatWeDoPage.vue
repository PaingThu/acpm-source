<script setup>
    import { site_info,lang, title,kaicho_info, member_info } from '/src/variables.js'
    import Nav from '/src/components/NavComponent.vue'
</script>


<template>
    <Nav />
    <section class="whatwedo">
        <div class="header text-center py-5">
            <h2 class="">{{title['whatwedo'][lang]}}</h2>
        </div>
        <div class="content py-5">
            <div class="container">
                <div class="banner row pb-3">
                    <div class="banner-img col-12 col-md-6 d-flex">
                        <img class="ms-auto" src="/src/assets/images/whatwedo/wwd-sample.jpg" alt="">
                    </div>
                    <div class="banner-text col-12 col-md-6">
                        <span class="title mb-2">
                            当団体として以下の3つのことを柱に活動していきます。
                        </span>
                        <span class="d-block">当面の取り組み</span>
                        <ul class="ps-2">
                            <li>
                                <span class="me-2">①</span>
                                <span>留学生/実習生支援</span>
                            </li>
                            <li>
                                <span class="me-2">②</span>
                                <span>人道支援</span>
                            </li>
                            <li>
                                <span class="me-2">③</span>
                                <span>ミャンマー支援の和を広げる啓蒙活動</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="inner-content p-3 p-md-5">
                    <div class="detail row pb-5">
                        <div class="text col-12 col-md-6">
                            <span class="title pb-3">
                                ① 留学生/実習生支援
                            </span>
                            <span class="setsumei py-3">
                                日本にいる留学生や実習生は本国にいる家族や親戚、友人の状況を心配しながら、馴れない日本の環境の中で生活しています。周囲を気遣う一方 で、自身の悩みについてはなかなか相談することができず、精神的に追い込まれている人の数は増えています。
                                希望を持って来日した留学生や実習生の支援を通じて、彼らが暮らしやすい環境を整えていくことは、将来的に日本 の人材不足解消にも貢献できると考えています。ミャンマーの若者の未来をサポートすることが、ミャンマーの平和の実現にも繋がると信じています。
                                留学生や実習生が抱える悩み相談の受付や、就職関連、ビザ関連などにサポートしていきます。
                            </span>
                        </div>
                        <div class="image col-12 col-md-6">
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="detail even row pb-5">
                        <div class="image col-12 col-md-6">
                            <img src="" alt="">
                        </div>
                        <div class="text col-12 col-md-6">
                            <span class="title pb-3">
                                ② 人道支援
                            </span>
                            <span class="setsumei py-3">
                                2022年8月現在、6万4000人が難民となり隣国へ逃れ、124万人以上が国内で避難を強いられています（UNHCR推計）。1日100円未満で暮らす貧困層が増える中、国際社会からも公的な支援が行き届いていない状況です。
                                今後、戦闘が激しくなっている地域を始め、支援が必要とされる国内と国境沿いでの避難民支援、公務員支援、医療従事者支援などを行います。
                                2022年3月に実施したクラウドファンディングでの経験とノウハウを活かし、現地ボランティア団体と連携しながら、必要なところに必要なものを、メンバーが責任を持ってしっかりお届け致します。
                            </span>
                        </div>
                    </div>
                    <div class="detail row">
                        <div class="text col-12 col-md-6">
                            <span class="title pb-3">
                                ③ ミャンマー支援の和を広げる啓蒙活動
                            </span>
                            <span class="setsumei py-3">
                                ロシアのウクライナ侵攻以降、ミャンマーに関する報道が減っているが、ミャンマーは困難な状況が続いている。昨夏以降、メンバーのもとに、ミャンマーから窮状を訴える会員制交流サイト（ＳＮＳ）のメッセージが増えた。これまでミャンマー支援のための街頭募金を続けてきた筆者も、クーデター直後に比べると足を止めてくれる人が減りつつあることに危機感を抱いていた。
                                ロシアのウクライナ侵攻を知った時には「自分たちと同じつらい思いをウクライナの人も味わうのか」と胸が痛んだ。
                                ウクライナ情勢をきっかけに世界が平和について考えるようになった今、どうかミャンマーにも目を向けてもらう人が一人でも増えてほしいと願いながら、大学での授業や憲法集会での講演を通じて啓蒙活動を行っている。
                            </span>
                        </div>
                        <div class="image col-12 col-md-6">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>