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
            { label: "中文名稱", value: "注射用水（Water for Injection, WFI）" },
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
            { label: "中文名稱", value: "去甲腎上腺素（Norepinephrine，又稱 Noradrenaline）" },
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
            { label: "中文名稱", value: "甲基培尼皮質醇（Methylprednisolone，又稱甲基潑尼松龍）" },
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
        ],        
        image: "/d2/penlight.webp",
        left: "16%",
        top: "40%",
        width: "4%",
        height: "16%",
      },
      {
        name: "喉頭鏡 1",
        description: [
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
        ],          
        image: "/d2/battery.webp",
        left: "12%",
        top: "58%",
        width: "16%",
        height: "4%",
      },
      {
        name: "膠帶",
        description: [
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
        ],          
        image: "/d2/tape.webp",
        left: "12%",
        top: "64%",
        width: "16%",
        height: "24%",
      },
      {
        name: "喉頭鏡 2",
        description: [
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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
            { label: "中文名稱", value: "腺苷（Adenosine）" },
            { label: "藥物分類", value: "抗心律不整藥物" },
            { label: "主要用途", value: "終止部分陣發性上心室頻脈（PSVT）" },
            { label: "作用機轉", value: "暫時減慢房室結（AV node）的電氣傳導，協助中斷異常心律迴路" },
            { label: "常見副作用", value: "臉部潮紅、胸悶、呼吸不適、短暫心跳減慢或房室傳導阻滯" },
            { label: "護理注意事項", value: "給藥時持續監測心電圖及生命徵象，備妥急救設備，並依醫囑及院內流程使用" }
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