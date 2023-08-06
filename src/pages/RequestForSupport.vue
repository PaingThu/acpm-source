<script setup>
    import { icons, site_info,lang, title } from '/src/variables.js'
    import Nav from '/src/components/NavComponent.vue'
</script>


<template>
    <Nav />
    <section class="r4s">
        <div class="header text-center py-5">
            <h2 class="">{{title['request-for-support'][lang]}}</h2>
        </div>
        <div class="content py-5">
            <div class="container">
                <div class="inner-content d-flex flex-column gap-3 align-items-center">
                    <h4 class="">国境沿いの子供たちに教育機会を！寄付金受付中</h4>
                    <img src="/src/assets/images/banner/r4s.jpeg" alt="">
                    <div class="description">
                        <pre>当会が教育支援の一環として支援を行なっている、国境沿いにある避難民学校「New Blood School(NBS)がNikke Asiaで紹介されました。
<a href="https://asia.nikkei.com/.../Myanmar-kids-in-Thailand-pull" target="_blank">https://asia.nikkei.com/.../Myanmar-kids-in-Thailand-pull</a>
NBSは、戦闘や空爆の影響で母国で生き残ることが出来ず、国境沿いに逃れた子供たちを受け入れている学校です。幼稚児から高校生までが通いクーデター前と比べて二倍以上にまで生徒数が急増し、中には親を無くしトラウマになっている子供もいます。長年教育に携わっているミャンマー人の校長先生はメンバーに「本当は子供たちをもっと受け入れたいのだが資金不足のため受け入れられず、胸が痛い。とても辛い」話してくれました。
学費を払えない子供たちにも教育を受けさせたいという校長先生やボランティア教員たちの強い思いで、学費を払えない子供たちのために寄付者を募りながら、なんとか学校運営を続けられています。高校生は、校長先生が作った寮に住み込みで、高卒と同等の学力を持つと証明する米国の認定試験GEDを受けることが出来ます。校長先生とボランティアで教える教員たちの熱心な取り組みによりGED試験の合格者は多数です。
当会は今後もミャンマーから逃れたこうした子供たちの「未来を繋ぐ」ために、国境沿いでの教育支援を続けて参ります。8月には再びメンバーが現地に訪問し支援活動を行います。
未来が奪われ学ぶ機会を失ったミャンマーの子供たちへの教育支援をされたい方(組織/団体)は是非、当会までお気軽にご連絡ください。8月現地訪問時にメンバーより直接お届け致します。
皆様の暖かいご支援で子供たちの給食や教室に必要な机/椅子の調達、寮の増設など様々な支援が出来ます。日本から出来ることを行いなんとかミャンマーの未来に繋げたいと考えています。誕生日や記念日などにご寄付されたい方、CSR活動の一貫として教育支援を考えていらしゃる団体様/法人様、下記の口座よりご寄付を承ります。現地とこまめにコミュニケーションを取りながら、支援物をお届け致します。
                        </pre>
                    </div>
                    <div class="bank-info">
                        <h6>
                            ◆お振込み口座情報
                        </h6>
                        <div class="detail-bk-info">
                            <div class="bk-info">
                                <span class="notice">郵貯銀行からお振込みされる方</span>
                                <span>銀行名　ゆうちょ銀行</span>
                                <span>記号１１３１０　番号０５４９５８７１</span>
                                <span>ミャンマーノヘイワヲツクルカイ(チィチィキンキン)</span>
                            </div>
                            <div class="bk-info">
                                <span class="notice">郵貯銀行以外の銀行からお振込みされる方</span>
                                <span>銀行名　ゆうちょ銀行</span>
                                <span>店名　一三八(イチサンハチ)</span>
                                <span>店番　１３８</span>
                                <span>預金種目　普通預金</span>
                                <span>口座番号　０５４９５８７</span>
                                <span>ミャンマーノヘイワヲツクルカイ(チィチィキンキン)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .r4s{
        .content{
            .container{
                .inner-content{
                    width: 75%;
                    margin: 0 auto;
                    img{
                        width: 100%;
                    }
                    .detail-bk-info{
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        .bk-info{
                            display: flex;
                            flex-direction: column;
                            gap: 0.5rem;
                            border: 1px solid orange;
                            padding: 1rem;
                            border-radius: 1rem;
                            .notice{
                                color: orange;
                            }
                        }
                    }
                }
            }
        }
    }
</style>