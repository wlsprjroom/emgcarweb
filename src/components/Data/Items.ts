// =========================
// DRAWER DATA
// =========================
// Add or remove drawers / items here.
// Each item has a name and description (shown in the modal),
// an image, and its position + size inside the drawer photo.

export interface DrawerItem {
  name: string
  description: {
    label: string
    value: string
  }[]
  image: string
  left: string
  top: string
  width: string
  height: string
}

export interface DrawerData {
  image: string
  items: DrawerItem[]
}

export const drawers: Record<number, DrawerData> = {
  1: {
    image: "/d1.webp",
    items: [
      {
        name: "Adenosine",
        description: [
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
        ],        
        image: "/d1/Adenosine.webp",
        left: "14%",
        top: "30%",
        width: "12%",
        height: "8%",
      },
      {
        name: "Dopamine",
        description: [
            { label: "中文名稱", value: "多巴胺（Dopamine）" },
            { label: "藥物分類", value: "血管活性藥物、強心及升壓藥物（兒茶酚胺類）" },
            { label: "主要用途", value: "用於特定情況下的休克及低血壓，以改善血流動力學" },
            { label: "作用機轉", value: "刺激多巴胺及腎上腺素受體，依劑量影響心臟收縮力、心率及血管張力" },
            { label: "常見副作用", value: "心跳過快、心律不整、血壓變化及心肌缺血" },
            { label: "護理注意事項", value: "依醫囑使用輸液幫浦持續靜脈輸注；密切監測血壓、心率、心電圖及末梢灌流；注意輸注部位是否滲漏，並依院內流程處理" }
        ],
        image: "/d1/Dopamine.webp",
        left: "30%",
        top: "30%",
        width: "18%",
        height: "8%",
      },
      {
        name: "Diphenhydramine",
        description: [
            { label: "中文名稱", value: "苯海拉明（Diphenhydramine）" },
            { label: "藥物分類", value: "第一代抗組織胺藥物" },
            { label: "主要用途", value: "緩解過敏反應，如蕁麻疹、搔癢及其他過敏症狀" },
            { label: "作用機轉", value: "阻斷組織胺 H1 受體，減輕組織胺引起的過敏反應" },
            { label: "常見副作用", value: "嗜睡、頭暈、口乾、視力模糊" },
            { label: "護理注意事項", value: "給藥後觀察過敏症狀及生命徵象，注意嗜睡、意識變化及低血壓等反應；嚴重過敏反應時，不可取代肌肉注射腎上腺素作為第一線治療" }
        ],
        image: "/d1/Diphenhydramine.webp",
        left: "50%",
        top: "30%",
        width: "19%",
        height: "9%",
      },
      {
        name: "Atropine",
        description: [
            { label: "中文名稱", value: "阿托品（Atropine）" },
            { label: "藥物分類", value: "抗膽鹼藥物（Anticholinergic）" },
            { label: "主要用途", value: "用於症狀性心搏過緩，亦可依適應症用於特定中毒情況" },
            { label: "作用機轉", value: "阻斷乙醯膽鹼對毒蕈鹼受體的作用，降低迷走神經對心臟的影響，使心率上升" },
            { label: "常見副作用", value: "心跳加快、口乾、瞳孔放大、視力模糊及尿滯留" },
            { label: "護理注意事項", value: "給藥前後監測心電圖、心率、血壓及意識狀態；觀察心律變化與藥物反應，並依醫囑及院內急救流程使用" }
        ],
        image: "/d1/Atropine.webp",
        left: "14%",
        top: "40%",
        width: "14%",
        height: "8%",
      },
      {
        name: "Magnesium sulfate",
        description: [
            { label: "中文名稱", value: "硫酸鎂（Magnesium sulfate）" },
            { label: "藥物分類", value: "電解質補充劑、抗痙攣藥物" },
            { label: "主要用途", value: "用於子癇前症及子癇的痙攣預防或治療、低血鎂症，以及特定類型的心律不整，如尖端扭轉型心室頻脈（Torsades de pointes）" },
            { label: "作用機轉", value: "補充鎂離子，調節神經肌肉興奮性，並影響心肌電氣活動" },
            { label: "常見副作用", value: "臉部潮紅、噁心、低血壓及嗜睡；過量可能導致呼吸抑制、反射減弱及心搏過緩" },
            { label: "護理注意事項", value: "依醫囑控制輸注速度；監測血壓、呼吸、意識、深部肌腱反射及尿量，必要時監測血鎂濃度；注意鎂中毒徵象，並依院內流程備妥葡萄糖酸鈣等解毒處置藥物" }
        ],
        image: "/d1/Magnesium-sulfate.webp",
        left: "34%",
        top: "40%",
        width: "14%",
        height: "8%",
      },
      {
        name: "Water",
        description: [
            { label: "中文名稱", value: "注射用水（Water for Injectio）" },
            { label: "藥物分類", value: "注射用溶劑、藥品調配用水" },
            { label: "主要用途", value: "用於依藥品仿單規定溶解或稀釋特定注射藥品" },
            { label: "作用機轉", value: "本身不具治療作用，主要作為注射藥品調配時的溶劑" },
            { label: "常見副作用", value: "正確依規定調配使用時，通常不會直接產生藥理作用；若直接大量注入血管，可能造成溶血及水分、電解質失衡" },
            { label: "護理注意事項", value: "確認藥品標示及使用方式；不可將一般注射用水直接靜脈注射，須依藥品仿單調配成適當溶液；注意無菌操作及單次使用規範" }
        ],        
        image: "/d1/Water.webp",
        left: "52%",
        top: "40%",
        width: "18%",
        height: "15%",
      },
      {
        name: "Midazolam",
        description: [
            { label: "中文名稱", value: "咪達唑侖（Midazolam）" },
            { label: "藥物分類", value: "苯二氮平類藥物（Benzodiazepine），鎮靜及抗痙攣藥物" },
            { label: "主要用途", value: "用於程序性鎮靜、麻醉誘導、急性癲癇發作控制及特定情況下的鎮靜" },
            { label: "作用機轉", value: "增強 GABA 在 GABA-A 受體的抑制作用，產生鎮靜、抗焦慮、遺忘及抗痙攣效果" },
            { label: "常見副作用", value: "嗜睡、頭暈、低血壓及呼吸抑制；嚴重時可能出現呼吸停止" },
            { label: "護理注意事項", value: "給藥期間及給藥後密切監測呼吸、血氧、血壓、心率及意識；備妥氧氣、抽吸及呼吸道急救設備；與鴉片類藥物併用時，呼吸抑制風險會增加；依醫囑及院內流程使用" }
        ],    
        image: "/d1/Midazolam.webp",
        left: "32%",
        top: "48%",
        width: "14%",
        height: "8%",
      },
      {
        name: "Epinephrine",
        description: [
            { label: "中文名稱", value: "腎上腺素（Epinephrine）" },
            { label: "藥物分類", value: "交感神經作用藥物、α及β腎上腺素受體促效劑" },
            { label: "主要用途", value: "用於心跳停止、嚴重過敏反應及特定急救情況" },
            { label: "作用機轉", value: "刺激α及β腎上腺素受體，使血管收縮、血壓上升，並增加心率及心肌收縮力；亦可緩解支氣管收縮" },
            { label: "常見副作用", value: "心悸、心跳過快、心律不整、血壓升高、顫抖及焦慮" },
            { label: "護理注意事項", value: "依適應症及院內急救流程確認給藥途徑與濃度；密切監測心電圖、血壓、心率及呼吸；注意心律不整及組織外滲風險，避免混淆不同濃度製劑" }
        ],     
        image: "/d1/Epinephrine.webp",
        left: "8%",
        top: "60%",
        width: "16%",
        height: "8%",
      },
      {
        name: "Norepinephrine",
        description: [
            { label: "中文名稱", value: "去甲腎上腺素（Norepinephrine）" },
            { label: "藥物分類", value: "血管收縮劑、升壓藥物（兒茶酚胺類）" },
            { label: "主要用途", value: "用於嚴重低血壓及休克，尤其是感染性休克，以維持血壓及重要器官灌流" },
            { label: "作用機轉", value: "主要刺激 α₁ 腎上腺素受體，使血管收縮、增加全身血管阻力及血壓；亦可刺激 β₁ 受體，影響心肌收縮力" },
            { label: "常見副作用", value: "高血壓、心律不整、心搏過慢及末梢組織缺血；輸注外滲可能造成局部組織損傷" },
            { label: "護理注意事項", value: "依醫囑使用輸液幫浦持續靜脈輸注；密切監測血壓、心率、心電圖及末梢灌流；定期檢查輸注部位是否外滲，並依院內流程調整劑量及處理異常反應" }
        ],    
        image: "/d1/Norepinephrine.webp",
        left: "30%",
        top: "58%",
        width: "18%",
        height: "9%",
      },
      {
        name: "Mepron",
        description: [
            { label: "中文名稱", value: "甲基培尼皮質醇（Methylprednisolone）" },
            { label: "藥物分類", value: "糖皮質類固醇（Glucocorticoid）" },
            { label: "主要用途", value: "用於嚴重過敏反應的輔助治療、氣喘急性惡化及其他需要全身性類固醇治療的發炎或免疫反應" },
            { label: "作用機轉", value: "抑制發炎介質及免疫反應，減輕發炎、腫脹與過敏相關症狀" },
            { label: "常見副作用", value: "血糖升高、血壓變化、胃部不適及情緒變化；使用期間可能增加感染風險" },
            { label: "護理注意事項", value: "依醫囑確認給藥途徑、劑量及稀釋方式；監測血糖、血壓及感染徵象；注意過敏反應。嚴重過敏反應時，不能取代肌肉注射腎上腺素作為第一線治療" }
        ],    
        image: "/d1/Mepron.webp",
        left: "52%",
        top: "57%",
        width: "18%",
        height: "9%",
      },
      {
        name: "Amiodarone",
        description: [
            { label: "中文名稱", value: "胺碘酮（Amiodarone）" },
            { label: "藥物分類", value: "第三類抗心律不整藥物（具有多重電生理作用）" },
            { label: "主要用途", value: "用於特定嚴重心室心律不整，如心室顫動（VF）及無脈性心室頻脈（pVT）等急救情況，亦可用於其他特定心律不整" },
            { label: "作用機轉", value: "主要延長心肌動作電位及不應期，並影響鈉、鈣及鉀離子通道與腎上腺素受體，抑制異常心律" },
            { label: "常見副作用", value: "低血壓、心搏過緩、房室傳導阻滯及心律不整；長期使用可能影響甲狀腺、肝臟及肺部功能" },
            { label: "護理注意事項", value: "依醫囑及院內急救流程確認劑量、給藥途徑與輸注速度；監測心電圖、心率及血壓，注意低血壓、心搏過緩及輸注反應；長期使用者須依醫囑追蹤甲狀腺、肝功能及肺部狀況" }
        ],
        image: "/d1/Amiodarone.webp",
        left: "8%",
        top: "70%",
        width: "14%",
        height: "9%",
      },
      {
        name: "Diazepam",
        description: [
            { label: "中文名稱", value: "地西泮（Diazepam）" },
            { label: "藥物分類", value: "苯二氮平類藥物（Benzodiazepine），鎮靜及抗痙攣藥物" },
            { label: "主要用途", value: "用於急性癲癇發作、肌肉痙攣及特定情況下的焦慮或鎮靜治療" },
            { label: "作用機轉", value: "增強 GABA 在 GABA-A 受體的抑制作用，產生鎮靜、抗焦慮、肌肉鬆弛及抗痙攣效果" },
            { label: "常見副作用", value: "嗜睡、頭暈、肌肉無力、低血壓及呼吸抑制；嚴重時可能出現呼吸停止" },
            { label: "護理注意事項", value: "給藥期間密切監測呼吸、血氧、血壓、心率及意識狀態；備妥呼吸道急救設備；與鴉片類藥物或其他中樞神經抑制劑併用時，呼吸抑制風險會增加；依醫囑及院內流程使用" }
        ],
        image: "/d1/Diazepam.webp",
        left: "4%",
        top: "81%",
        width: "16%",
        height: "12%",
      },
      {
        name: "Dextrose",
        description: [
            { label: "中文名稱", value: "葡萄糖（Dextrose）" },
            { label: "藥物分類", value: "碳水化合物補充劑、靜脈輸液" },
            { label: "主要用途", value: "用於低血糖的治療，亦可依濃度及適應症補充熱量或作為靜脈輸液的一部分" },
            { label: "作用機轉", value: "提供葡萄糖作為細胞能量來源，提升血糖濃度" },
            { label: "常見副作用", value: "高血糖、電解質失衡及輸注部位刺激；高濃度溶液外滲可能造成組織損傷" },
            { label: "護理注意事項", value: "依醫囑確認葡萄糖濃度、給藥途徑及輸注速度；給藥前後監測血糖與意識狀態，並觀察輸注部位及電解質變化；依院內低血糖處置流程使用" }
        ],
        image: "/d1/Dextrose.webp",
        left: "26%",
        top: "70%",
        width: "20%",
        height: "20%",
      },
      {
        name: "Nitroglycerin",
        description: [
            { label: "中文名稱", value: "硝化甘油（Nitroglycerin）" },
            { label: "藥物分類", value: "硝酸酯類血管擴張劑" },
            { label: "主要用途", value: "用於緩解心絞痛，亦可依適應症用於急性冠心症及特定情況下的急性肺水腫或高血壓" },
            { label: "作用機轉", value: "釋放一氧化氮，使血管平滑肌舒張，主要降低心臟前負荷及心肌耗氧量，並可擴張冠狀動脈" },
            { label: "常見副作用", value: "頭痛、頭暈、低血壓、臉部潮紅及反射性心搏過速" },
            { label: "護理注意事項", value: "給藥前後監測血壓、心率及胸痛變化；注意低血壓及姿勢性頭暈；使用前確認是否近期使用 PDE-5 抑制劑（如 sildenafil），避免嚴重低血壓；依醫囑及院內流程使用" }
        ],
        image: "/d1/Nitroglycerin.webp",
        left: "50%",
        top: "68%",
        width: "20%",
        height: "10%",
      },
      {
        name: "Hydrocortisone",
        description: [
            { label: "中文名稱", value: "氫化可的松（Hydrocortisone）" },
            { label: "藥物分類", value: "糖皮質類固醇（Glucocorticoid）" },
            { label: "主要用途", value: "用於腎上腺功能不全、特定嚴重過敏反應的輔助治療及腎上腺危象等情況" },
            { label: "作用機轉", value: "抑制發炎及免疫反應，並具有糖皮質激素與一定程度的鹽皮質激素作用" },
            { label: "常見副作用", value: "血糖升高、血壓變化、胃部不適及電解質失衡；使用期間可能增加感染風險" },
            { label: "護理注意事項", value: "依醫囑確認劑量、給藥途徑及調配方式；監測血壓、血糖、電解質及感染徵象；嚴重過敏反應時不可取代肌肉注射腎上腺素作為第一線治療" }
        ],
        image: "/d1/Hydrocortisone.webp",
        left: "50%",
        top: "80%",
        width: "22%",
        height: "10%",
      },
      {
        name: "Sodium bicarbonate",
        description: [
            { label: "中文名稱", value: "碳酸氫鈉（Sodium bicarbonate）" },
            { label: "藥物分類", value: "鹼化劑、電解質補充劑" },
            { label: "主要用途", value: "用於特定情況下的代謝性酸中毒、高血鉀症及三環抗憂鬱劑等藥物中毒的治療" },
            { label: "作用機轉", value: "提供碳酸氫根離子以緩衝過多的氫離子，協助改善酸鹼失衡；亦可在特定中毒情況下減少心臟毒性" },
            { label: "常見副作用", value: "代謝性鹼中毒、高血鈉、低血鉀及體液負荷增加" },
            { label: "護理注意事項", value: "依醫囑確認適應症、劑量及給藥方式；監測血氣分析、電解質、血鈉及心電圖；注意體液負荷與鹼中毒風險，並依院內急救流程使用" }
        ],
        image: "/d1/Sodium-Bicabonate.webp",
        left: "74%",
        top: "30%",
        width: "16%",
        height: "24%",
      },
      {
        name: "Furosemide",
        description: [
            { label: "中文名稱", value: "呋塞米（Furosemide）" },
            { label: "藥物分類", value: "袢利尿劑（Loop diuretic）" },
            { label: "主要用途", value: "用於水腫、急性肺水腫及特定情況下的高血壓治療" },
            { label: "作用機轉", value: "抑制腎臟亨利氏環粗上行支的鈉鉀氯共同轉運蛋白，增加鈉、水及電解質排泄，促進利尿" },
            { label: "常見副作用", value: "低血壓、脫水、低血鉀、低血鈉及腎功能變化；快速靜脈給藥或高劑量可能增加耳毒性風險" },
            { label: "護理注意事項", value: "給藥前後監測血壓、尿量、體液狀態及腎功能；依醫囑追蹤血鉀、血鈉等電解質；靜脈給藥時依藥品仿單及院內規範控制給藥速度，並觀察利尿效果與不良反應" }
        ],
        image: "/d1/Furosemide.webp",
        left: "76%",
        top: "57%",
        width: "18%",
        height: "12%",
      },
      {
        name: "Calcium chloride",
        description: [
            { label: "中文名稱", value: "氯化鈣（Calcium chloride）" },
            { label: "藥物分類", value: "鈣鹽製劑、電解質補充劑" },
            { label: "主要用途", value: "用於嚴重高血鉀症伴隨心電圖變化、症狀性低血鈣及特定鈣離子通道阻斷劑中毒等急救情況" },
            { label: "作用機轉", value: "補充鈣離子，穩定心肌細胞膜，降低高血鉀對心臟電氣活動的影響；但不會直接降低血鉀濃度" },
            { label: "常見副作用", value: "心搏過緩、心律不整、低血壓及高血鈣；靜脈外滲可能造成嚴重組織損傷" },
            { label: "護理注意事項", value: "依醫囑確認濃度、劑量及給藥途徑；靜脈給藥時監測心電圖及生命徵象，密切觀察注射部位是否外滲；避免與碳酸氫鈉或含磷酸鹽溶液直接混合，並依院內急救流程使用" }
        ],
        image: "/d1/Calcium-chloride.webp",
        left: "76%",
        top: "72%",
        width: "20%",
        height: "18%",
      },
    ],
  },

  2: {
    image: "/d2.webp",
    items: [
      {
        name: "Penlight",
        description: [
            { label: "中文名稱", value: "筆型手電筒（Penlight）" },
            { label: "物品分類", value: "護理評估及診察輔助工具" },
            { label: "主要用途", value: "用於評估瞳孔大小、形狀、對光反應，以及協助觀察口腔、咽喉等部位" },
            { label: "作用原理", value: "利用光源照射檢查部位，輔助觀察瞳孔對光反射及局部外觀變化" },
            { label: "常見注意事項", value: "避免光線長時間或近距離直射眼睛，並注意電池及燈具功能是否正常" },
            { label: "護理注意事項", value: "評估瞳孔時應比較雙側瞳孔大小、形狀及對光反應；觀察意識狀態與瞳孔變化，異常時立即通報並依院內流程處理；使用後清潔並妥善收納" }
        ],
        image: "/d2/penlight.webp",
        left: "16%",
        top: "40%",
        width: "4%",
        height: "16%",
      },
      {
        name: "喉頭鏡握柄",
        description: [
            { label: "中文名稱", value: "喉頭鏡握柄（Laryngoscope Handle）" },
            { label: "物品分類", value: "氣道管理及插管輔助器械" },
            { label: "主要用途", value: "搭配喉頭鏡葉片使用，協助醫療人員進行氣管內插管及聲門暴露" },
            { label: "作用原理", value: "提供握持及操作支撐，並透過電池或充電電源供應光源，使喉頭鏡葉片照亮口咽及喉部" },
            { label: "常見注意事項", value: "確認電源、燈光及連接處功能正常；避免器械損壞或光源失效" },
            { label: "護理注意事項", value: "使用前確認握柄與喉頭鏡葉片連接牢固、光源正常及電量充足；使用後依院內感染管制規範清潔消毒，並檢查器械功能及妥善收納" }
        ],
        image: "/d2/scope1.webp",
        left: "22%",
        top: "40%",
        width: "10%",
        height: "16%",
      },
      {
        name: "電池",
        description: [
            { label: "中文名稱", value: "電池（Battery）" },
            { label: "物品分類", value: "醫療器材電源供應用品" },
            { label: "主要用途", value: "提供喉頭鏡握柄、筆型手電筒等醫療器材所需電力，確保設備正常運作" },
            { label: "作用原理", value: "將化學能轉換為電能，供應器材所需電力" },
            { label: "常見注意事項", value: "電量不足、電池漏液、腐蝕或電池接觸不良可能導致器材無法正常使用" },
            { label: "護理注意事項", value: "定期檢查電池電量及有效功能，確認規格與正負極安裝正確；備妥備用電池，發現漏液或損壞時立即更換，並依院內規範處理廢電池" }
        ],
        image: "/d2/battery.webp",
        left: "12%",
        top: "58%",
        width: "16%",
        height: "4%",
      },
      {
        name: "宜拉膠帶",
        description: [
            { label: "中文名稱", value: "宜拉膠帶（透氣紙膠帶）" },
            { label: "物品分類", value: "醫療固定用品" },
            { label: "主要用途", value: "用於固定紗布、敷料、管路或其他醫療用品，減少移位" },
            { label: "作用原理", value: "利用黏著層將敷料或管路固定於皮膚表面，透氣材質有助於減少皮膚悶熱" },
            { label: "常見注意事項", value: "少數患者可能出現皮膚刺激、紅腫或接觸性過敏" },
            { label: "護理注意事項", value: "使用前確認皮膚清潔乾燥；固定時避免過度拉扯皮膚，並定期檢查黏貼處是否有紅腫、破皮或過敏反應；移除時應輕柔操作，避免造成皮膚損傷" }
        ],
        image: "/d2/tape.webp",
        left: "12%",
        top: "64%",
        width: "16%",
        height: "24%",
      },
      {
        name: "喉頭鏡葉片",
        description: [
            { label: "中文名稱", value: "喉頭鏡葉片（Laryngoscope Blade）" },
            { label: "物品分類", value: "氣道管理及插管輔助器械" },
            { label: "主要用途", value: "搭配喉頭鏡握柄使用，協助暴露聲門，以利氣管內插管" },
            { label: "作用原理", value: "透過葉片抬起舌部及周圍組織，改善喉部視野，協助辨識聲門位置" },
            { label: "常見注意事項", value: "葉片尺寸不合適、光源故障或器械損壞可能影響插管操作，並增加口腔及牙齒受傷風險" },
            { label: "護理注意事項", value: "使用前確認葉片尺寸、光源及與握柄的連接功能正常；使用後依院內感染管制規範進行清潔、消毒或滅菌，並檢查器械完整性及妥善收納" }
        ],
        image: "/d2/scope2.webp",
        left: "36%",
        top: "40%",
        width: "16%",
        height: "20%",
      },
      {
        name: "Airway",
        description: [
            { label: "中文名稱", value: "口咽呼吸道（Oropharyngeal Airway）" },
            { label: "物品分類", value: "呼吸道維持輔助器材" },
            { label: "主要用途", value: "協助維持上呼吸道通暢，適用於無咽反射或意識不清的患者" },
            { label: "作用機轉", value: "透過支撐舌部，減少舌根後墜造成的上呼吸道阻塞" },
            { label: "常見注意事項", value: "尺寸不合適或用於仍有咽反射的患者，可能引起嘔吐、作嘔或呼吸道阻塞" },
            { label: "護理注意事項", value: "使用前評估意識、咽反射及呼吸道狀況，選擇合適尺寸；放置後持續觀察呼吸、血氧及呼吸道通暢情形，並依院內急救流程操作" }
        ],
        image: "/d2/airway.webp",
        left: "32%",
        top: "64%",
        width: "16%",
        height: "20%",
      },
      {
        name: "Bite",
        description: [
            { label: "中文名稱", value: "咬口器（Bite Block）" },
            { label: "物品分類", value: "口腔及呼吸道輔助器材" },
            { label: "主要用途", value: "協助維持口腔開放，避免患者咬合而壓迫或損壞口腔內的管路" },
            { label: "作用原理", value: "置於適當位置作為口腔間隔，減少牙齒咬合對管路造成的壓迫" },
            { label: "常見注意事項", value: "使用不當可能造成口腔黏膜、牙齒或嘴唇受傷；並非所有患者或情況都適用" },
            { label: "護理注意事項", value: "依器材用途及院內規範使用，確認固定穩妥且不影響呼吸道；持續觀察口腔黏膜、管路位置及患者狀況" }
        ],
        image: "/d2/bite.webp",
        left: "54%",
        top: "70%",
        width: "14%",
        height: "20%",
      },
      {
        name: "Kelly",
        description: [
            { label: "中文名稱", value: "止血鉗（Kelly）" },
            { label: "物品分類", value: "外科手術器械／夾持器械" },
            { label: "主要用途", value: "用於夾持血管或組織，以協助止血；亦可用於夾持紗布或其他適用物品" },
            { label: "作用原理", value: "利用鉗口與鎖扣結構夾緊目標組織或物品，提供穩定的夾持力" },
            { label: "常見注意事項", value: "過度施力或不當夾持可能造成組織損傷；使用前應確認器械完整且功能正常" },
            { label: "護理注意事項", value: "使用前確認器械清潔、消毒或滅菌狀態符合用途；使用後依院內規範處理，並檢查鉗口、關節及鎖扣是否正常" }
        ],
        image: "/d2/kelly.webp",
        left: "70%",
        top: "38%",
        width: "16%",
        height: "40%",
      },
    ],
  },

  3: {
    image: "/d3.webp",
    items: [
      {
        name: "空針",
        description: [
            { label: "中文名稱", value: "注射空針（Syringe）" },
            { label: "物品分類", value: "醫療注射及液體抽取器材" },
            { label: "主要用途", value: "用於抽取、量取及輸送藥液或其他醫療液體，依規格與用途搭配適當針頭或接頭" },
            { label: "作用原理", value: "透過推拉活塞改變筒身內的壓力，使液體進入或排出針筒" },
            { label: "常見注意事項", value: "應依用途選擇合適容量與規格；一次性空針不可重複使用，並避免接觸無菌部位造成污染" },
            { label: "護理注意事項", value: "使用前確認包裝完整、有效期限及容量標示；抽取或給藥時遵守無菌技術與用藥安全規範，使用後依院內規定丟棄於適當的醫療廢棄物容器" }
        ],
        image: "/d3/syringe.webp",
        left: "20%",
        top: "40%",
        width: "16%",
        height: "22%",
      },
      {
        name: "抽血試管",
        description: [
            { label: "中文名稱", value: "抽血試管（Blood Collection Tube）" },
            { label: "物品分類", value: "檢體採集及保存器材" },
            { label: "主要用途", value: "用於採集、保存及運送血液檢體，以供血液學、生化、凝血或其他相關檢驗" },
            { label: "作用原理", value: "依試管內添加物的不同，促進血液凝固、抑制凝血或保存特定檢體成分，以符合不同檢驗需求" },
            { label: "常見注意事項", value: "不同顏色的試管通常代表不同添加物與檢驗用途，應依檢驗項目選用；採血量不足、混合不當或檢體溶血可能影響檢驗結果" },
            { label: "護理注意事項", value: "採血前核對患者身分及檢驗項目，選擇正確試管；依規範採集足量檢體，必要時輕柔混勻，並正確標示、保存及送檢" }
        ],
        image: "/d3/blood-tube.webp",
        left: "40%",
        top: "40%",
        width: "12%",
        height: "8%",
      },
      {
        name: "紙膠帶",
        description: [
            { label: "中文名稱", value: "紙膠帶（Medical Paper Tape）" },
            { label: "物品分類", value: "醫療固定及敷料用品" },
            { label: "主要用途", value: "用於固定紗布、敷料、導管或醫療管路，協助維持其位置" },
            { label: "作用原理", value: "利用膠帶表面的醫療用黏著劑，使敷料或管路固定於皮膚表面" },
            { label: "常見注意事項", value: "長時間黏貼或撕除不當可能造成皮膚刺激、紅腫或表皮損傷；黏性可能受潮濕、汗液影響" },
            { label: "護理注意事項", value: "使用前確認皮膚狀況及固定需求，避免過度拉緊；撕除時輕柔操作，並定期檢查固定狀況與皮膚完整性" }
        ],
        image: "/d3/paper-tape.webp",
        left: "40%",
        top: "50%",
        width: "12%",
        height: "8%",
      },
      {
        name: "針頭",
        description: [
            { label: "中文名稱", value: "注射針頭（Hypodermic Needle）" },
            { label: "物品分類", value: "醫療注射及穿刺器材" },
            { label: "主要用途", value: "搭配注射空針，用於藥液注射、液體抽取或其他符合器材規格的醫療用途" },
            { label: "作用原理", value: "透過中空針管建立液體通道，使液體能在適當的壓力下進出" },
            { label: "常見注意事項", value: "針頭具有尖銳端，可能造成刺傷或感染；針頭規格應符合使用目的，無菌包裝破損或已使用的針頭不可再使用" },
            { label: "護理注意事項", value: "使用前確認包裝完整、無菌狀態及規格；操作時遵守標準防護措施，使用後立即投入合適的防穿刺容器，不可徒手回套針帽或重複使用" }
        ],
        image: "/d3/needle.webp",
        left: "38%",
        top: "59%",
        width: "14%",
        height: "5%",
      },
      {
        name: "Opsite",
        description: [
            { label: "中文名稱", value: "防水透明敷料（Opsite）" },
            { label: "物品分類", value: "透明薄膜敷料／傷口護理用品" },
            { label: "主要用途", value: "用於覆蓋及保護傷口，或依產品規格固定導管與敷料，協助維持局部清潔" },
            { label: "作用原理", value: "以透明、具黏性的薄膜形成保護屏障，通常具有防水及透氣特性，並可方便觀察覆蓋部位" },
            { label: "常見注意事項", value: "不適用於所有傷口；若傷口滲液較多、出現感染徵象，或周圍皮膚有刺激反應，應重新評估敷料是否合適" },
            { label: "護理注意事項", value: "使用前評估傷口及周圍皮膚狀況，依產品說明與院內規範選用；黏貼時避免皺褶，並定期檢查是否有滲液、鬆脫、紅腫或其他異常" }
        ],
        image: "/d3/opsite.webp",
        left: "13%",
        top: "66%",
        width: "16%",
        height: "22%",
      },
      {
        name: "止血帶",
        description: [
            { label: "中文名稱", value: "TPE止血帶（TPE Tourniquet）" },
            { label: "物品分類", value: "醫療採血及靜脈穿刺輔助用品" },
            { label: "主要用途", value: "用於抽血或靜脈穿刺前暫時阻礙靜脈回流，使靜脈較容易顯現，方便血管定位" },
            { label: "作用原理", value: "透過適度環繞肢體施加壓力，暫時減少靜脈血液回流，使局部靜脈充盈" },
            { label: "常見注意事項", value: "綁得過緊或時間過長可能造成不適，並影響採血檢體品質；不可與急救中用於控制嚴重出血的止血帶混為一談" },
            { label: "護理注意事項", value: "依院內規範正確使用，避免過度加壓；完成靜脈穿刺後應適時鬆開，並觀察患者肢體及皮膚狀況；重複使用型產品應依產品說明清潔消毒" }
        ],
        image: "/d3/tourniquet.webp",
        left: "30%",
        top: "70%",
        width: "4%",
        height: "16%",
      },
      {
        name: "T型接管",
        description: [
            { label: "中文名稱", value: "T型延長管（T-Extension Tube）" },
            { label: "物品分類", value: "輸液及靜脈管路輔助器材" },
            { label: "主要用途", value: "用於延長靜脈輸液管路，方便連接輸液設備或依產品設計進行藥液輸注" },
            { label: "作用原理", value: "透過管路及接頭建立液體流通通道，使輸液能由輸液設備傳送至患者的靜脈管路" },
            { label: "常見注意事項", value: "接頭鬆脫、管路扭折、漏液或空氣進入管路可能影響輸液安全；不同型號的接頭與用途可能不同" },
            { label: "護理注意事項", value: "使用前確認包裝完整、有效期限及接頭相容性；操作時遵守無菌技術，確認連接牢固、管路通暢且無漏液，並依院內規範更換及處理" }
        ],
        image: "/d3/Tpiece.webp",
        left: "38%",
        top: "70%",
        width: "16%",
        height: "16%",
      },
      {
        name: "輸血",
        description: [
            { label: "中文名稱", value: "輸血套（Blood Transfusion Set）" },
            { label: "物品分類", value: "輸血及靜脈輸注器材" },
            { label: "主要用途", value: "用於將血液或血液成分由血袋輸送至患者體內" },
            { label: "作用原理", value: "透過輸血管路及內建濾網，輸送血液並過濾血液中的凝集物或較大的顆粒" },
            { label: "常見注意事項", value: "須使用符合輸血需求的專用輸血器；輸血過程可能發生過敏反應、發燒或其他輸血反應，應密切觀察患者狀況" },
            { label: "護理注意事項", value: "輸血前依院內規範核對患者身分、血品及相容性資料；確認管路與接頭完整，依規定進行輸血並監測生命徵象及輸血反應，若有異常應立即依院內輸血反應流程處理" }
        ],
        image: "/d3/blood-transfusion.webp",
        left: "54%",
        top: "40%",
        width: "6%",
        height: "26%",
      },
      {
        name: "免針 IV",
        description: [
            { label: "中文名稱", value: "免針式點滴輸液套（Needle-Free IV Set）" },
            { label: "物品分類", value: "靜脈輸液及管路安全防護器材" },
            { label: "主要用途", value: "用於連接輸液容器與患者的靜脈輸液管路，並透過免針接頭設計，減少使用針具進行管路連接的需求" },
            { label: "作用原理", value: "利用輸液管路、接頭及免針連接裝置建立封閉的液體通道，供點滴液體輸注使用" },
            { label: "常見注意事項", value: "接頭污染、管路鬆脫、扭折或漏液可能增加感染及輸液異常風險；不同產品的接頭設計與使用方式可能不同" },
            { label: "護理注意事項", value: "使用前確認包裝完整、有效期限及接頭相容性；連接前依規範消毒接頭並待其乾燥，操作時遵守無菌技術，並定期檢查管路固定、通暢性及有無滲漏" }
        ],
        image: "/d3/needleless-iv.webp",
        left: "62%",
        top: "40%",
        width: "6%",
        height: "26%",
      },
      {
        name: "IV bag",
        description: [
            { label: "中文名稱", value: "免針式精密輸液套（Needle-Free Precision Infusion Set）" },
            { label: "物品分類", value: "靜脈輸液及精密流量控制器材" },
            { label: "主要用途", value: "用於靜脈輸液，透過精密滴注設計協助控制輸液流量，適用於需要較精確輸液控制的情況" },
            { label: "作用原理", value: "利用精密滴斗及輸液管路控制液體滴注，並透過免針接頭連接管路，減少使用針具連接的需求" },
            { label: "常見注意事項", value: "輸液速度不當、管路阻塞、接頭污染或連接鬆脫可能影響輸液安全；實際流量控制能力依產品設計而異" },
            { label: "護理注意事項", value: "使用前確認包裝完整、有效期限及產品規格；連接前依規範消毒免針接頭並待其乾燥，確認管路排氣、連接牢固及通暢，並依醫囑與院內規範監測輸液速度及患者反應" }
        ],
        image: "/d3/ivbag.webp",
        left: "70%",
        top: "40%",
        width: "16%",
        height: "40%",
      },
      {
        name: "置留針",
        description: [
            { label: "中文名稱", value: "靜脈留置針（IV Catheter）" },
            { label: "物品分類", value: "靜脈注射及輸液器材" },
            { label: "主要用途", value: "置入周邊靜脈並暫時留置，方便持續輸液、給藥或依醫療需求進行靜脈治療" },
            { label: "作用原理", value: "將柔軟的導管留置於靜脈內，建立靜脈通路，供藥液或輸液進入血液循環" },
            { label: "常見注意事項", value: "可能發生穿刺部位疼痛、滲漏、靜脈炎、出血或感染；若出現紅腫、疼痛或輸液不順，應立即評估" },
            { label: "護理注意事項", value: "使用前確認包裝完整、規格及有效期限；置入後妥善固定並依院內規範維護管路，定期觀察穿刺部位及輸液狀況，並依規定更換或移除" }
        ],
        image: "/d3/iv.webp",
        left: "56%",
        top: "80%",
        width: "18%",
        height: "14%",
      },
    ],
  },

  4: {
    image: "/d4.webp",
    items: [
      {
        name: "Item 11",
        description: [
            { label: "中文名稱", value: "test" },
            { label: "藥物分類", value: "test" },
            { label: "主要用途", value: "test" },
            { label: "作用機轉", value: "test" },
            { label: "常見副作用", value: "test" },
            { label: "護理注意事項", value: "test" }
        ], 
        image: "/item11.webp",
        left: "20%",
        top: "30%",
        width: "10%",
        height: "15%",
      },
    ],
  },
}