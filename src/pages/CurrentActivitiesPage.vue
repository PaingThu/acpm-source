<script setup>
    import Nav from '/src/components/NavComponent.vue'
    import { site_info,lang, title } from '/src/variables.js'
</script>


<template>
    <Nav />
    <section class="current-activities">
        <div class="header text-center py-5">
            <h2 class="">{{title['current-activities'][lang]}}</h2>
        </div>
        <div class="content py-5">
            <div class="container">
                <div class="inner-content border-bottom pb-5">
                    <span class="act-title pb-3">
                        在日ミャンマー留学生や技能実習生の支援に向けた一次調査
                    </span>
                    <div class="row g-3">
                        <div class="act-img col-12 col-md-6">
                            <img src="/src/assets/images/activities/act1.png" alt="" />
                        </div>
                        <div class="act-info col-12 col-md-6">
                            <span>
                                日本にいるミャンマーの留学生や実習生の夢の実現をサポートするため、ニーズ調査を行っています。実際に留学生や実習生が何に困っているのかを把握したいと考えています。悩みを 抱える留学生や実習生とも直接やりとりする中で、我々に何が出来るかを考え、具体的に対応していく予定です。
                            </span>
                            <ul class="ps-0 mb-3">
                                <li>
                                    <span class="me-2">①</span>
                                    <span>
                                        留学生や実習生が抱える悩み相談の受付(問題解決のためのアドバイス)、
                                    </span> 
                                </li>
                                <li>
                                    <span class="me-2">②</span>
                                    <span>
                                        就職関連のお手伝い(履歴書添削、面接練習、求人案件の紹介)、
                                    </span> 
                                </li>
                                <li>
                                    <span class="me-2">③</span>
                                    <span>
                                        ビザ関連のサポート(行政書士より現状を踏まえた的確なアドバイス)
                                    </span> 
                                </li>
                            </ul>
                            <span class="d-block">
                                当団体に相談をしたい留学生/実習生は、下記アンケートにクリックして記入してください。
                                
                            </span>
                            <a class="questionnaire px-3 py-2 mb-3" href="https://forms.gle/hLAwACi5d4LZGgSSA" target="_blank">アンケート</a>
                            <span class="d-block">
                                緊急性の高い人から順次、対応して参ります。<br>
                                ※ボランティア団体であるため金銭的な支援の要望など対応できない場合には、しかるべき団体にお繋ぎするなどのサポートを考えています。<br>
                                ※人的リソースに限りがあるため、支援対象人数が多い場合には緊急度の高い方から優先的に対応する予定で す。アンケート回答者全員に連絡できない可能性があることを予めご理解ください。
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>