window.swanBenchDemoData = {
  "dimensions": {
    "title": "Per-Dimensions",
    "summary": "Speech and dialog samples grouped by evaluation dimension, with radar summaries and model comparisons.",
    "subsets": [
      {
        "label": "Speech",
        "items": [
          {
            "title": "Sample 1",
            "referenceHtml": "我在这里讲的故事，换作别人可以写成一本书，然而我在这故事里不遗余力地活过，倾尽了所有德行，所以我仅仅将回忆记录下来。往事断断续续，支离破碎，但我不打算靠虚构事实连通捕捉。这种修饰铺陈会浇灭内心的热忱，最后一丝异趣也会化为乌有。父亲过世那年，我还不到十二岁，母亲不愿留在父亲生前行役的勒阿福尔，决定移居巴黎，以便我能更好地完成学业。她在卢森堡公园附近，租下一套小公寓。",
            "referenceText": "我在这里讲的故事，换作别人可以写成一本书，然而我在这故事里不遗余力地活过，倾尽了所有德行，所以我仅仅将回忆记录下来。往事断断续续，支离破碎，但我不打算靠虚构事实连通捕捉。这种修饰铺陈会浇灭内心的热忱，最后一丝异趣也会化为乌有。父亲过世那年，我还不到十二岁，母亲不愿留在父亲生前行役的勒阿福尔，决定移居巴黎，以便我能更好地完成学业。她在卢森堡公园附近，租下一套小公寓。",
            "image": "./swanbench-speech-demo/assets/photo/dimensions/mono_speaker/radar-1.png",
            "models": [
              {
                "name": "GLM-TTS",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/1.wav"
              },
              {
                "name": "ZipVoice",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/2.wav"
              },
              {
                "name": "FishSpeech",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/3.wav"
              },
              {
                "name": "Minimax",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/4.wav"
              },
              {
                "name": "SparkTTS",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/5.wav"
              },
              {
                "name": "Seed-TTS",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/6.wav"
              },
              {
                "name": "VibeVoice",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/7.wav"
              },
              {
                "name": "Gemni",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/8.wav"
              }
            ]
          },
          {
            "title": "Sample 2",
            "referenceHtml": "It's weird now though because I feel like guys are supposed to be two things. Like my wife, she wants me to be more manly, but also vulnerable. It's very confusing. I'll give you an example. Like the other day, she said she wanted me to be more aggressive in the bedroom. And then she yelled at me for not making the bed. That's two different guys. I'm unlikable. I don't know if you guys can see my face. I have an asshole face. I look like all the presidents except one. And... Yeah, it's Jimmy Carter. And... Recently, somebody told me that I look like Matthew McConaughey. In Dallas Buyers Club. So that was... That hurt my feelings. I'm a man, but I'm not, you know? I'm male, but I'm not a man.",
            "referenceText": "It's weird now though because I feel like guys are supposed to be two things. Like my wife, she wants me to be more manly, but also vulnerable. It's very confusing. I'll give you an example. Like the other day, she said she wanted me to be more aggressive in the bedroom. And then she yelled at me for not making the bed. That's two different guys. I'm unlikable. I don't know if you guys can see my face. I have an asshole face. I look like all the presidents except one. And... Yeah, it's Jimmy Carter. And... Recently, somebody told me that I look like Matthew McConaughey. In Dallas Buyers Club. So that was... That hurt my feelings. I'm a man, but I'm not, you know? I'm male, but I'm not a man.",
            "image": "./swanbench-speech-demo/assets/photo/dimensions/mono_speaker/radar-2.png",
            "models": [
              {
                "name": "IndexTTS2",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/9.wav"
              },
              {
                "name": "F5TTS",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/10.wav"
              },
              {
                "name": "CosyVoice3",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/11.wav"
              },
              {
                "name": "MegaTTS3",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/12.wav"
              },
              {
                "name": "CosyVoice2",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/13.wav"
              },
              {
                "name": "Elenvenlabs",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/14.wav"
              },
              {
                "name": "InworldTTS",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/15.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/mono_speaker/16.wav"
              }
            ]
          }
        ],
        "statsImage": "./swanbench-speech-demo/assets/photo/mono_table.png",
        "statsCaption": "Evaluation results of long-form TTS models across multi-dimensional metrics."
      },
      {
        "label": "Dialog",
        "items": [
          {
            "title": "Sample 1",
            "referenceHtml": "Speaker1: Worldwide. This is Bloomberg Surveillance alongside Lisa Brambitz together with Anne-Marie Hauden. I'm Jonathan Farrow. Your equity market on the S&P 500 bouncing back from the biggest one-day loss since September. Equity futures on the S&P 500 positive here by a third of one percent. Brammo, pushback from Chairman Powell. Big earnings coming a little bit later.<br>Speaker2: Yeah, basically taking March off the table, maybe, or making it less likely. The market's responding to that. Big tech very much front and focus. And the real question to me is, do we get a more motley picture with the likes of Meta, with the likes of Apple and Amazon reporting after the bell than we did with Microsoft and Google, which put out solid earnings, but people just weren't impressed. Before we talk about tech, we need to talk about the financials. We seem to be at the face of the cycle where we talk about banks we've never heard of before. One in Japan, another in New York. Commercial real estate is something that's been hanging over this market for a long, long time. Are we starting to see a little bit of a reality check on that side of things? So the reality versus the fiction, the fiction that some people might say is, is this another crisis in the making in regional banks? And most people say no. New York Community Bank Corp was an idiosyncratic story with respect to the mix of holdings. That said, you have serious",
            "referenceText": "Speaker1: Worldwide. This is Bloomberg Surveillance alongside Lisa Brambitz together with Anne-Marie Hauden. I'm Jonathan Farrow. Your equity market on the S&P 500 bouncing back from the biggest one-day loss since September. Equity futures on the S&P 500 positive here by a third of one percent. Brammo, pushback from Chairman Powell. Big earnings coming a little bit later.\nSpeaker2: Yeah, basically taking March off the table, maybe, or making it less likely. The market's responding to that. Big tech very much front and focus. And the real question to me is, do we get a more motley picture with the likes of Meta, with the likes of Apple and Amazon reporting after the bell than we did with Microsoft and Google, which put out solid earnings, but people just weren't impressed. Before we talk about tech, we need to talk about the financials. We seem to be at the face of the cycle where we talk about banks we've never heard of before. One in Japan, another in New York. Commercial real estate is something that's been hanging over this market for a long, long time. Are we starting to see a little bit of a reality check on that side of things? So the reality versus the fiction, the fiction that some people might say is, is this another crisis in the making in regional banks? And most people say no. New York Community Bank Corp was an idiosyncratic story with respect to the mix of holdings. That said, you have serious",
            "image": "./swanbench-speech-demo/assets/photo/dimensions/two_speaker/radar-1.png",
            "models": [
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/1.wav"
              },
              {
                "name": "Elevenlabs",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/2.wav"
              },
              {
                "name": "MOSS-TTSD",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/3.wav"
              },
              {
                "name": "FireRedTTS2",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/4.wav"
              },
              {
                "name": "MoonCast",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/5.wav"
              }
            ]
          },
          {
            "title": "Sample 2",
            "referenceHtml": "Speaker1: 又进入到一个存钱分了，又来了，还是3B的一个开局，但这一分EDG并没有太好的经济。<br>Speaker2: 康康英雄英雄数位先接一个队，又打赢了。等一下等一下二楼窗口要小心，二楼窗口要小心，要小心，好可以。<br>Speaker1: 刚刚刚刚拿数位，拿到了一波四杀，冠军点出现了，拿到了赛点，谁是大明星？在此刻，EDG终于终于是有这个机会了，终于是有可以终结比赛的机会。<br>Speaker2: 这一波B长廊的前压真的是向死而生，对，因为是个纯前锋，他们其实是个混起局，他们没有很好的枪械，没有很得心应手的枪械。<br>Speaker1: 我觉得我们还是要把情绪稍微收一收，先收一收，还有一分。现在TH的状态也是正好三个冠军点。<br>Speaker2: 康康的冥驹，康康的冥驹给压力了，直接把相信无人机给狙了，但要知道布有终极技能。<br>Speaker1: 现在看一下双方的终极技能进度，球球其实也有两边的宇宙分裂，连接起来真的不好说。<br>Speaker6: 现在就是要看个人英雄主义的发挥了，这个时候谁能够站出来，谁就是统治战场的主宰。<br>",
            "referenceText": "Speaker1: 又进入到一个存钱分了，又来了，还是3B的一个开局，但这一分EDG并没有太好的经济。\nSpeaker2: 康康英雄英雄数位先接一个队，又打赢了。等一下等一下二楼窗口要小心，二楼窗口要小心，要小心，好可以。\nSpeaker1: 刚刚刚刚拿数位，拿到了一波四杀，冠军点出现了，拿到了赛点，谁是大明星？在此刻，EDG终于终于是有这个机会了，终于是有可以终结比赛的机会。\nSpeaker2: 这一波B长廊的前压真的是向死而生，对，因为是个纯前锋，他们其实是个混起局，他们没有很好的枪械，没有很得心应手的枪械。\nSpeaker1: 我觉得我们还是要把情绪稍微收一收，先收一收，还有一分。现在TH的状态也是正好三个冠军点。\nSpeaker2: 康康的冥驹，康康的冥驹给压力了，直接把相信无人机给狙了，但要知道布有终极技能。\nSpeaker1: 现在看一下双方的终极技能进度，球球其实也有两边的宇宙分裂，连接起来真的不好说。\nSpeaker6: 现在就是要看个人英雄主义的发挥了，这个时候谁能够站出来，谁就是统治战场的主宰。",
            "image": "./swanbench-speech-demo/assets/photo/dimensions/two_speaker/radar-2.png",
            "models": [
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/6.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/7.wav"
              },
              {
                "name": "Seed-TTS-Podcast",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/8.wav"
              },
              {
                "name": "SoulX-Podcast",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/9.wav"
              },
              {
                "name": "VibeVoice",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/10.wav"
              },
              {
                "name": "ZipVoice Dialogue",
                "audio": "./swanbench-speech-demo/assets/wav/dimensions/two_speaker/11.wav"
              }
            ]
          }
        ],
        "statsImage": "./swanbench-speech-demo/assets/photo/two_table.png",
        "statsCaption": "Evaluation results of long-form dialog generation across multi-dimensional metrics."
      }
    ]
  },
  "scenarios": {
    "title": "Per-Scenarios",
    "summary": "Samples organized by downstream scenarios and core challenge axes: acoustics, semantics, and expressiveness.",
    "subsets": [
      {
        "label": "Speech",
        "items": [
          {
            "title": "Podcast",
            "dimension": "Acoustics",
            "referenceHtml": "I don’t know what it is about me, but I just like thinking about a cute boy all the time. I always need some sort of crush — a celebrity, a random barista, anything. I’m the type of person who always has to have a crush. That leads me to dating a lot, because once I fixate on a crush and they like me back, I feel like I have to date them since I’ve had the crush for a while. So, I think I date often because I’m constantly having crushes. Also, I don’t enjoy casual hookups much. If I want to be physical with a guy, I prefer to be in a relationship. I’m not particularly driven by sex.",
            "referenceText": "I don’t know what it is about me, but I just like thinking about a cute boy all the time. I always need some sort of crush — a celebrity, a random barista, anything. I’m the type of person who always has to have a crush. That leads me to dating a lot, because once I fixate on a crush and they like me back, I feel like I have to date them since I’ve had the crush for a while. So, I think I date often because I’m constantly having crushes. Also, I don’t enjoy casual hookups much. If I want to be physical with a guy, I prefer to be in a relationship. I’m not particularly driven by sex.",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/mono_speaker/2.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/acoustic/elevenlabs_mono_podcast_en_3.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/acoustic/gemini_mono_podcast_en_3.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/acoustic/chatgpt_mono_podcast_en_3.wav"
              }
            ]
          },
          {
            "title": "Audiobook",
            "dimension": "Acoustics",
            "referenceHtml": "第一次见到心理咨询师，蛤蟆先生问他：“你认为我会好起来吗？” 咨询师站定了，直视着蛤蟆先生的眼睛说：“如果我不相信每个人都有能力变得更好，我就不会做这份工作了。” 前情与导读：蛤蟆本是一个热情、时尚，又爱冒险的家伙，惹出过不少麻烦和笑话。可他现在陷入抑郁，不能自拔。他的朋友们决定出手相助，其中包括智慧又威严的獾，关心朋友但有点唠叨的河鼠，还有体贴善良的鼹鼠。他们商量来商量去，决定督促蛤蟆重视这个问题，并带他去接受心理咨询。于是，本书故事就此展开。虽然书中人物的基本设定来自英国作家肯尼斯・格雷厄姆的经典著作《柳林风声》，但只是借用了《柳林风声》的人物形象。",
            "referenceText": "第一次见到心理咨询师，蛤蟆先生问他：“你认为我会好起来吗？” 咨询师站定了，直视着蛤蟆先生的眼睛说：“如果我不相信每个人都有能力变得更好，我就不会做这份工作了。” 前情与导读：蛤蟆本是一个热情、时尚，又爱冒险的家伙，惹出过不少麻烦和笑话。可他现在陷入抑郁，不能自拔。他的朋友们决定出手相助，其中包括智慧又威严的獾，关心朋友但有点唠叨的河鼠，还有体贴善良的鼹鼠。他们商量来商量去，决定督促蛤蟆重视这个问题，并带他去接受心理咨询。于是，本书故事就此展开。虽然书中人物的基本设定来自英国作家肯尼斯・格雷厄姆的经典著作《柳林风声》，但只是借用了《柳林风声》的人物形象。",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/mono_speaker/1.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/acoustic/elevenlabs_mono_audiobook_zh_7.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/acoustic/gemini_mono_audiobook_zh_7.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/acoustic/chatgpt_mono_audiobook_zh_7.wav"
              }
            ]
          },
          {
            "title": "Lesson",
            "dimension": "Semantics",
            "referenceHtml": "This third party may not be trustworthy may not be trustworthy. For example, they have the uhmachine learning as a service provider. This service provider um is responsible for training, the model for the user, for the user, okay so the maliciousservice provider may manipulate the data and the model to insert a back door.okay So this one this one, this um a tax scenario is also very stealthy because it's hard for the user to detectthat the trained modelis actually backdoor. because Because when we havedescribed before the features of the back door attacks, is that the back door model will performsatisfactory on the clean data set. Clean data said. So usually after the outsourcing service,the user is able tofor example, checkthe model performance. However, usually the user only halfthe um clean data set clean data set and the back door model will performideally, normally on the clean data set, so the user may not may not figure out any of normality of this model of the melody. Andthis backdrop will only be activated by the triggerof which the userhas no knowledge ofbecause the userhim or herself does not design the trigger. The trigger is designed by the malicious service provider.",
            "referenceText": "This third party may not be trustworthy may not be trustworthy. For example, they have the uhmachine learning as a service provider. This service provider um is responsible for training, the model for the user, for the user, okay so the maliciousservice provider may manipulate the data and the model to insert a back door.okay So this one this one, this um a tax scenario is also very stealthy because it's hard for the user to detectthat the trained modelis actually backdoor. because Because when we havedescribed before the features of the back door attacks, is that the back door model will performsatisfactory on the clean data set. Clean data said. So usually after the outsourcing service,the user is able tofor example, checkthe model performance. However, usually the user only halfthe um clean data set clean data set and the back door model will performideally, normally on the clean data set, so the user may not may not figure out any of normality of this model of the melody. Andthis backdrop will only be activated by the triggerof which the userhas no knowledge ofbecause the userhim or herself does not design the trigger. The trigger is designed by the malicious service provider.",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/mono_speaker/3.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/semantic/elevenlabs_mono_lesson_en_1.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/semantic/gemini_mono_lesson_en_1.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/semantic/chatgpt_mono_lesson_en_1.wav"
              }
            ]
          },
          {
            "title": "News",
            "dimension": "Semantics",
            "referenceHtml": "寒潮南下之后，干燥的偏北气流占据上风。今天午后，中东部的很多地方空气相对湿度都非常低，像内蒙古、甘肃的一些地方，相对湿度还不足10%，就连华南的个别地方也降到了30%以下。像这种南北方都天干物燥的天气，未来一段时间还将会持续。其中今天晚上到明天，雨雪将会零散地分布在西南、东北等地，下得不大，其余绝大多数地方都是雨雪稀少、晴天当道的格局。特别是内蒙古中东部、西藏西部等地，还会伴随着五级以上的风，干燥的感觉愈发明显。不只是明天，放眼今后十天，中东部都将会以晴为主，几乎没有什么像样的降水。这也意味着干燥的情况将不会有明显改善，而这样的天气也会对人体健康产生不利影响。一定要注意多喝水，增加室内湿度。同时，干燥还会带来火灾隐患，室外要避免使用明火，室内也要注意用火用电安全。晴朗干燥的天气也会加大一天中的气温差异，明后天全国大部分地区昼夜温差将会保持在10度以上，西部的不少地方还将会超过15度。尽管白天暖意回归，但是一早一晚依旧天寒地冻，早出晚归还是要特别注意保暖。",
            "referenceText": "寒潮南下之后，干燥的偏北气流占据上风。今天午后，中东部的很多地方空气相对湿度都非常低，像内蒙古、甘肃的一些地方，相对湿度还不足10%，就连华南的个别地方也降到了30%以下。像这种南北方都天干物燥的天气，未来一段时间还将会持续。其中今天晚上到明天，雨雪将会零散地分布在西南、东北等地，下得不大，其余绝大多数地方都是雨雪稀少、晴天当道的格局。特别是内蒙古中东部、西藏西部等地，还会伴随着五级以上的风，干燥的感觉愈发明显。不只是明天，放眼今后十天，中东部都将会以晴为主，几乎没有什么像样的降水。这也意味着干燥的情况将不会有明显改善，而这样的天气也会对人体健康产生不利影响。一定要注意多喝水，增加室内湿度。同时，干燥还会带来火灾隐患，室外要避免使用明火，室内也要注意用火用电安全。晴朗干燥的天气也会加大一天中的气温差异，明后天全国大部分地区昼夜温差将会保持在10度以上，西部的不少地方还将会超过15度。尽管白天暖意回归，但是一早一晚依旧天寒地冻，早出晚归还是要特别注意保暖。",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/mono_speaker/4.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/semantic/elevenlabs_mono_news_zh_15.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/semantic/gemini_mono_news_zh_15.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/semantic/chatgpt_mono_news_zh_15.wav"
              }
            ]
          },
          {
            "title": "Speech",
            "dimension": "Expressiveness",
            "referenceHtml": "Gopal. When I was 27 years old, I left a very demanding job in management consulting for a job that was even more demanding, teaching. I went to teach 7th graders math in the New York City public schools. And like any teacher, I made quizzes and tests. I gave out homework assignments. When the work came back, I calculated grades. What struck me was that IQ was not the only difference between my best and my worst students. Some of my strongest performers did not have stratospheric IQ scores. Some of my smartest kids weren't doing so well. And that got me thinking. The kinds of things you need to learn in 7th grade math, sure, they're hard. Ratios, decimals, the area of a parallelogram. But these concepts are not impossible. And I was firmly convinced that every one of my students could learn the material if they worked hard and long enough. After several more years of teaching, I came to the conclusion that what we need in education is a much better understanding of students and learning from a motivational perspective, from a psychological perspective. In education, the one thing we know how to measure best is IQ. But what if doing well in school and in life depends on much more than your ability to learn quickly and easily? So I left the classroom, and I went to graduate school to become a psychologist. And there were a lot of real students who got me to do that. So I went to graduate school. I was an adult in life, and I got to see my first question there, and I've been here in the same class, wishing that to even learn how to measure headed and aviation countless pencement.",
            "referenceText": "Gopal. When I was 27 years old, I left a very demanding job in management consulting for a job that was even more demanding, teaching. I went to teach 7th graders math in the New York City public schools. And like any teacher, I made quizzes and tests. I gave out homework assignments. When the work came back, I calculated grades. What struck me was that IQ was not the only difference between my best and my worst students. Some of my strongest performers did not have stratospheric IQ scores. Some of my smartest kids weren't doing so well. And that got me thinking. The kinds of things you need to learn in 7th grade math, sure, they're hard. Ratios, decimals, the area of a parallelogram. But these concepts are not impossible. And I was firmly convinced that every one of my students could learn the material if they worked hard and long enough. After several more years of teaching, I came to the conclusion that what we need in education is a much better understanding of students and learning from a motivational perspective, from a psychological perspective. In education, the one thing we know how to measure best is IQ. But what if doing well in school and in life depends on much more than your ability to learn quickly and easily? So I left the classroom, and I went to graduate school to become a psychologist. And there were a lot of real students who got me to do that. So I went to graduate school. I was an adult in life, and I got to see my first question there, and I've been here in the same class, wishing that to even learn how to measure headed and aviation countless pencement.",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/mono_speaker/6.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/expressive/elevenlabs_mono_speech_en_18.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/expressive/gemini_mono_speech_en_18.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/expressive/chatgpt_mono_speech_en_18.wav"
              }
            ]
          },
          {
            "title": "Talk Show",
            "dimension": "Expressiveness",
            "referenceHtml": "而且色盲这个病对我可能生活造成最大的一个影响，就是我过马路的时候是分不清红绿灯的，我第一次过马路看到红绿灯，我还特别奇怪，我还去问过我们老师，我说老师啊，为什么红绿灯这么重要的东西，要用两种这么不容易区分的颜色，那脑子都蒙了，说因为这个就是人类最容易区分的颜色，而且我妈知道我是红绿色盲的，我就一直跟我说，说你过马路的时候呀，一定要别人过的时候你再过，但这个时候就有一个问题，我总有自己过的时候吧，每次这个时候我都要在那里等，等一个人来，而且这个时候如果刚好是红灯的话，非常合理，我就在那里等红灯，但如果是绿灯的话，他会发现我也不走，但一旦他从我身边经过，我就会立马跟上去。",
            "referenceText": "而且色盲这个病对我可能生活造成最大的一个影响，就是我过马路的时候是分不清红绿灯的，我第一次过马路看到红绿灯，我还特别奇怪，我还去问过我们老师，我说老师啊，为什么红绿灯这么重要的东西，要用两种这么不容易区分的颜色，那脑子都蒙了，说因为这个就是人类最容易区分的颜色，而且我妈知道我是红绿色盲的，我就一直跟我说，说你过马路的时候呀，一定要别人过的时候你再过，但这个时候就有一个问题，我总有自己过的时候吧，每次这个时候我都要在那里等，等一个人来，而且这个时候如果刚好是红灯的话，非常合理，我就在那里等红灯，但如果是绿灯的话，他会发现我也不走，但一旦他从我身边经过，我就会立马跟上去。",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/mono_speaker/5.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/expressive/elevenlabs_mono_talk_show_zh_8.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/expressive/gemini_mono_talk_show_zh_8.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/mono_speaker/expressive/chatgpt_mono_talk_show_zh_8.wav"
              }
            ]
          }
        ]
      },
      {
        "label": "Dialog",
        "items": [
          {
            "title": "Interview",
            "dimension": "Acoustics",
            "referenceHtml": "<strong>Speaker1:</strong> Thank you so much for being with us. Always great to see you. I'm not sure where we should begin because you have such a broad view of these topics. But I feel like we should start with the biggest question, which is, if you look forward at capability growth from here, where does it come from? Does it come from more scale? Does it come from data work?<br>\n        <strong>Speaker2:</strong> Multiple vectors of progress. I think there is probably a little bit more juice out of the scalability limit on this piece, so hopefully we'll see some progress there. But it's getting really, really difficult. Society's perception of AI has been very skewed by the PR machinery of a handful of companies with amazing PR capabilities. And because that number of companies drove scale as a narrative, people think of scale first as a vector of progress. But I think agentic workflows, the way we build multimodal models, we have a lot of work to build concrete applications. I mean, there are multiple vectors of progress, as well as wild cards like brand new technologies. Like, can diffusion models, which are used to generate images for the most part, will that also work for generating text? I think that's exciting. So I think there'll be multiple ways for AI to make progress.<br>\n        <strong>Speaker1:</strong> You actually came up with the term \"agentic AI.\" What did you mean then?<br>\n        <strong>Speaker2:</strong> So when I decided to start talking about agentic AI, which wasn't a thing when I started to use the term, my team was slightly annoyed at me. One of my team members that I won't name actually said, \"Andrew, the world does not need you to make up another term.\" But I decided to do it anyway, and for whatever reason, it stuck. The reason I started to talk about agentic AI was because a couple of years ago, I saw people would spend a lot of time debating, is this an agent? Is this not an agent? What is an agent? And I felt there's a lot of good work, and there was a spectrum of degrees of agency—where there are highly autonomous agents that could plan, take multiple steps of reasoning, do a lot of stuff by themselves, and then things that were lower degrees of agency, where we're prompting it, we're affecting its output. And I felt like rather than debating is this an agent or not, let's just talk about the degrees of agency and say it's all agentic, so you can spend our time actually building this. So I started to push the term agentic AI. What I did not expect was that several months later, a bunch of marketers would get a hold of this term and use it as a sticker to stick it on everything in sight. And so I think the term agentic AI really took off.<br>\n        <strong>Speaker1:</strong> I feel like the marketing hype has gone insanely fast. But the real business progress has also been rapidly growing, but maybe not as fast as the marketing hype. What do you think are the biggest hype?",
            "referenceText": "Speaker1: Thank you so much for being with us. Always great to see you. I'm not sure where we should begin because you have such a broad view of these topics. But I feel like we should start with the biggest question, which is, if you look forward at capability growth from here, where does it come from? Does it come from more scale? Does it come from data work?\nSpeaker2: Multiple vectors of progress. I think there is probably a little bit more juice out of the scalability limit on this piece, so hopefully we'll see some progress there. But it's getting really, really difficult. Society's perception of AI has been very skewed by the PR machinery of a handful of companies with amazing PR capabilities. And because that number of companies drove scale as a narrative, people think of scale first as a vector of progress. But I think agentic workflows, the way we build multimodal models, we have a lot of work to build concrete applications. I mean, there are multiple vectors of progress, as well as wild cards like brand new technologies. Like, can diffusion models, which are used to generate images for the most part, will that also work for generating text? I think that's exciting. So I think there'll be multiple ways for AI to make progress.\nSpeaker1: You actually came up with the term \"agentic AI.\" What did you mean then?\nSpeaker2: So when I decided to start talking about agentic AI, which wasn't a thing when I started to use the term, my team was slightly annoyed at me. One of my team members that I won't name actually said, \"Andrew, the world does not need you to make up another term.\" But I decided to do it anyway, and for whatever reason, it stuck. The reason I started to talk about agentic AI was because a couple of years ago, I saw people would spend a lot of time debating, is this an agent? Is this not an agent? What is an agent? And I felt there's a lot of good work, and there was a spectrum of degrees of agency—where there are highly autonomous agents that could plan, take multiple steps of reasoning, do a lot of stuff by themselves, and then things that were lower degrees of agency, where we're prompting it, we're affecting its output. And I felt like rather than debating is this an agent or not, let's just talk about the degrees of agency and say it's all agentic, so you can spend our time actually building this. So I started to push the term agentic AI. What I did not expect was that several months later, a bunch of marketers would get a hold of this term and use it as a sticker to stick it on everything in sight. And so I think the term agentic AI really took off.\nSpeaker1: I feel like the marketing hype has gone insanely fast. But the real business progress has also been rapidly growing, but maybe not as fast as the marketing hype. What do you think are the biggest hype?",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/two_speaker/2.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/acoustic/elevenlabs_two_interview_en_9.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/acoustic/gemini_two_interview_en_9.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/acoustic/chatgpt_two_interview_en_9.wav"
              }
            ]
          },
          {
            "title": "Chat",
            "dimension": "Acoustics",
            "referenceHtml": "<strong>Speaker1:</strong> 你最近有去看展览或者博物馆吗？<br>\n        <strong>Speaker2:</strong> 去了，上周末去了美术馆，挺有意思的。<br>\n        <strong>Speaker1:</strong> 哇，展览主题是什么？<br>\n        <strong>Speaker2:</strong> 是现代艺术，主要展示一些新媒体艺术和装置作品。<br>\n        <strong>Speaker1:</strong> 听起来挺酷的，有没有特别喜欢的作品？<br>\n        <strong>Speaker2:</strong> 有一件用光影做的装置，走进去感觉像穿越到另一个空间，很震撼。<br>\n        <strong>Speaker1:</strong> 哇，这种互动式的艺术我也喜欢，能参与进去感觉更深刻。<br>\n        <strong>Speaker2:</strong> 对啊，拍了好多照片，感觉回去还能慢慢回味。<br>\n        <strong>Speaker1:</strong> 我也想去看看，下次你可以带我一起去吗？<br>\n        <strong>Speaker2:</strong> 当然可以，顺便可以去咖啡厅坐坐，聊聊感受。<br>\n        <strong>Speaker1:</strong> 太好了，下次就这么安排，顺便还能拍照留念。<br>",
            "referenceText": "Speaker1: 你最近有去看展览或者博物馆吗？\nSpeaker2: 去了，上周末去了美术馆，挺有意思的。\nSpeaker1: 哇，展览主题是什么？\nSpeaker2: 是现代艺术，主要展示一些新媒体艺术和装置作品。\nSpeaker1: 听起来挺酷的，有没有特别喜欢的作品？\nSpeaker2: 有一件用光影做的装置，走进去感觉像穿越到另一个空间，很震撼。\nSpeaker1: 哇，这种互动式的艺术我也喜欢，能参与进去感觉更深刻。\nSpeaker2: 对啊，拍了好多照片，感觉回去还能慢慢回味。\nSpeaker1: 我也想去看看，下次你可以带我一起去吗？\nSpeaker2: 当然可以，顺便可以去咖啡厅坐坐，聊聊感受。\nSpeaker1: 太好了，下次就这么安排，顺便还能拍照留念。",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/two_speaker/1.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/acoustic/elevenlabs_two_chat_zh_8.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/acoustic/gemini_two_chat_zh_8.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/acoustic/chatgpt_two_chat_zh_8.wav"
              }
            ]
          },
          {
            "title": "News",
            "dimension": "Semantics",
            "referenceHtml": "<strong>Speaker1:</strong> Worldwide. This is Bloomberg Surveillance alongside Lisa Brambitz together with Anne-Marie Hauden. I'm Jonathan Farrow. Your equity market on the S&P 500 bouncing back from the biggest one-day loss since September. Equity futures on the S&P 500 positive here by a third of one percent. Brammo, pushback from Chairman Powell. Big earnings coming a little bit later.<br>\n        <strong>Speaker2:</strong> Yeah, basically taking March off the table, maybe, or making it less likely. The market's responding to that. Big tech very much front and focus. And the real question to me is, do we get a more motley picture with the likes of Meta, with the likes of Apple and Amazon reporting after the bell than we did with Microsoft and Google, which put out solid earnings, but people just weren't impressed. Before we talk about tech, we need to talk about the financials. We seem to be at the face of the cycle where we talk about banks we've never heard of before. One in Japan, another in New York. Commercial real estate is something that's been hanging over this market for a long, long time. Are we starting to see a little bit of a reality check on that side of things? So the reality versus the fiction, the fiction that some people might say is, is this another crisis in the making in regional banks? And most people say no. New York Community Bank Corp was an idiosyncratic story with respect to the mix of holdings. That said, you have serious concerns about a reckoning that has not happened in commercial real estate. And those were just exacerbated with the Azora Bank in Japan reporting a 20 percent drop, just seeing a 20 percent drop in their shares as a result of U.S. property losses. So again, it's the shoe that hasn't dropped in commercial property, not necessarily fear.<br>\n        <strong>Speaker1:</strong> Feed-in for Asian markets with a tech seller of driving US stocks to a fourth session of losses. NVIDIA slipping ahead of its third quarter results as Wall Street worries about a potential AI bubble. But the big deals in the sector keep coming. NVIDIA and Microsoft to invest up to $15 billion in Anthropic, which in turn will spend $30 billion on Microsoft computing capacity. And President Trump's grip on Washington shows signs of weakening as the Senate reaches a deal to release the Epstein files after near unanimous House support. Welcome to the Bloomberg New Economy Forum 2025, thriving in an age of extremes. Of course, we have seen US tariffs at the highest levels since the 1940s at a time when we also have the ongoing US-China tech rivalry. What's your take on these intertwined dynamics?<br>\n        <strong>Speaker2:</strong> And of course, right now, the focus and the hottest topic, artificial intelligence. And the gap is being fast closed by the Chinese side. But there are these lingering questions. Is there only one form of AI leadership? And what does the AI future look like? As you talked about tariffs, it's also this backdrop of, is it too soon, about, you know, 10 months into the presidency, to tell how the Trump policies are actually reshaping the global trading order? Is it really beneficial to the US in terms of this pecking order?<br>\n        <strong>Speaker1:</strong> Stories this hour. Asian stocks set to extend Wall Street losses as investors shun risk ahead of Nvidia's earnings and the US jobs report. The S&P 500 falling below its 50-day moving average while Bitcoin traders position for more pain. Amazon joins a spree of jumbo debt sales from tech firms racing to fund AI infrastructure, raising $15 billion. Plus, bond king Jeff Gunlock tells Bloomberg he's loading up on cash and staying away from private credit over what he calls garbage lending.<br>",
            "referenceText": "Speaker1: Worldwide. This is Bloomberg Surveillance alongside Lisa Brambitz together with Anne-Marie Hauden. I'm Jonathan Farrow. Your equity market on the S&P 500 bouncing back from the biggest one-day loss since September. Equity futures on the S&P 500 positive here by a third of one percent. Brammo, pushback from Chairman Powell. Big earnings coming a little bit later.\nSpeaker2: Yeah, basically taking March off the table, maybe, or making it less likely. The market's responding to that. Big tech very much front and focus. And the real question to me is, do we get a more motley picture with the likes of Meta, with the likes of Apple and Amazon reporting after the bell than we did with Microsoft and Google, which put out solid earnings, but people just weren't impressed. Before we talk about tech, we need to talk about the financials. We seem to be at the face of the cycle where we talk about banks we've never heard of before. One in Japan, another in New York. Commercial real estate is something that's been hanging over this market for a long, long time. Are we starting to see a little bit of a reality check on that side of things? So the reality versus the fiction, the fiction that some people might say is, is this another crisis in the making in regional banks? And most people say no. New York Community Bank Corp was an idiosyncratic story with respect to the mix of holdings. That said, you have serious concerns about a reckoning that has not happened in commercial real estate. And those were just exacerbated with the Azora Bank in Japan reporting a 20 percent drop, just seeing a 20 percent drop in their shares as a result of U.S. property losses. So again, it's the shoe that hasn't dropped in commercial property, not necessarily fear.\nSpeaker1: Feed-in for Asian markets with a tech seller of driving US stocks to a fourth session of losses. NVIDIA slipping ahead of its third quarter results as Wall Street worries about a potential AI bubble. But the big deals in the sector keep coming. NVIDIA and Microsoft to invest up to $15 billion in Anthropic, which in turn will spend $30 billion on Microsoft computing capacity. And President Trump's grip on Washington shows signs of weakening as the Senate reaches a deal to release the Epstein files after near unanimous House support. Welcome to the Bloomberg New Economy Forum 2025, thriving in an age of extremes. Of course, we have seen US tariffs at the highest levels since the 1940s at a time when we also have the ongoing US-China tech rivalry. What's your take on these intertwined dynamics?\nSpeaker2: And of course, right now, the focus and the hottest topic, artificial intelligence. And the gap is being fast closed by the Chinese side. But there are these lingering questions. Is there only one form of AI leadership? And what does the AI future look like? As you talked about tariffs, it's also this backdrop of, is it too soon, about, you know, 10 months into the presidency, to tell how the Trump policies are actually reshaping the global trading order? Is it really beneficial to the US in terms of this pecking order?\nSpeaker1: Stories this hour. Asian stocks set to extend Wall Street losses as investors shun risk ahead of Nvidia's earnings and the US jobs report. The S&P 500 falling below its 50-day moving average while Bitcoin traders position for more pain. Amazon joins a spree of jumbo debt sales from tech firms racing to fund AI infrastructure, raising $15 billion. Plus, bond king Jeff Gunlock tells Bloomberg he's loading up on cash and staying away from private credit over what he calls garbage lending.",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/two_speaker/3.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/semantic/elevenlabs_two_news_en_3.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/semantic/gemini_two_news_en_3.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/semantic/chatgpt_two_news_en_3.wav"
              }
            ]
          },
          {
            "title": "Popular Science",
            "dimension": "Semantics",
            "referenceHtml": "<strong>Speaker1:</strong> 对，这只龙是怎么发现的？<br>\n        <strong>Speaker2:</strong> 呃，这个龙是我们在蒙大拿美国，我们跟那边的私人农场和农场主合作，在他们的土地上面挖掘，是我们这边找恐龙。其实是一个很随机的。<br>\n        <strong>Speaker1:</strong> 哦，是随机找的？<br>\n        <strong>Speaker2:</strong> 我们不知道地底下哪里有恐龙，但是我们知道在哪一个层位发现恐龙几率比较高。就是我们会找到对的层位——白垩纪时期的沉积地层。然后在那个地层，我们每天会用走路去找。<br>\n        <strong>Speaker2:</strong> 然后找到是它的这个头盾的钝角，露出一点点，就露出在土壤上面。对，然后乍看会以为是一根骨头露出来。发现了以后就会往下挖掘，越挖那个范围越大。<br>\n        <strong>Speaker2:</strong> 然后后来就知道它是一个完整的头。那发现完了以后，尽可能把周遭的沉积岩跟头骨一起保存下来，用石膏把它包起来。石膏包了以后，你就可以往下继续挖，一直挖到下面，再继续往下包覆。后来它就整个被包起来，你就可以拿起来。拿起来以后我们就把它打包。<br>",
            "referenceText": "Speaker1: 对，这只龙是怎么发现的？\nSpeaker2: 呃，这个龙是我们在蒙大拿美国，我们跟那边的私人农场和农场主合作，在他们的土地上面挖掘，是我们这边找恐龙。其实是一个很随机的。\nSpeaker1: 哦，是随机找的？\nSpeaker2: 我们不知道地底下哪里有恐龙，但是我们知道在哪一个层位发现恐龙几率比较高。就是我们会找到对的层位——白垩纪时期的沉积地层。然后在那个地层，我们每天会用走路去找。\nSpeaker2: 然后找到是它的这个头盾的钝角，露出一点点，就露出在土壤上面。对，然后乍看会以为是一根骨头露出来。发现了以后就会往下挖掘，越挖那个范围越大。\nSpeaker2: 然后后来就知道它是一个完整的头。那发现完了以后，尽可能把周遭的沉积岩跟头骨一起保存下来，用石膏把它包起来。石膏包了以后，你就可以往下继续挖，一直挖到下面，再继续往下包覆。后来它就整个被包起来，你就可以拿起来。拿起来以后我们就把它打包。",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/two_speaker/4.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/semantic/elevenlabs_two_popular_science_zh_9.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/semantic/gemini_two_popular_science_zh_9.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/semantic/chatgpt_two_popular_science_zh_9.wav"
              }
            ]
          },
          {
            "title": "Sports",
            "dimension": "Expressiveness",
            "referenceHtml": "<strong>speaker1:</strong> And here we go, under ninety seconds left, tied at 102. The arena is shaking, the crowd is on its feet, and Matthews brings the ball across half court with purpose.<br>\n        <strong>speaker2:</strong> He’s been the heartbeat of this team tonight—27 points, 8 assists, and absolutely fearless attacking the rim. Let’s see if he’s got one more big moment in him.<br>\n        <strong>speaker1:</strong> High screen from Carter—Matthews uses it, snakes to his left, hesitation—oh he’s got the defender leaning! Pull-up from midrange—<br>\n        <strong>speaker2:</strong> Off the iron! Rebound tipped… Carter snatches it! Second-chance opportunity, huge for the home team!<br>\n        <strong>speaker1:</strong> Shot clock resets. Carter backing down—power dribble—spins baseline—<br>\n        <strong>speaker2:</strong> Oh my goodness! The reverse finish! What body control! And listen to this place—they’re exploding!<br>\n        <strong>speaker1:</strong> 104–102, just over 40 seconds left. Here comes Denver the other way. Lopez calling for the iso on the right wing.<br>\n        <strong>speaker2:</strong> He’s been cold all quarter, but superstars take these shots. Ten on the clock—Lopez drives, attacks the seam—kicks to the corner—Burke for three!<br>\n        <strong>speaker1:</strong> Short! Long rebound—scramble on the floor—who wants it?<br>\n        <strong>speaker2:</strong> Matthews dives! What a hustle play! He gets the timeout! That might be the play of the night!<br>\n        <strong>speaker1:</strong> Unreal effort. This place is thunderous. And now the pressure flips to Denver—they need a stop here or this game might be over.<br>",
            "referenceText": "speaker1: And here we go, under ninety seconds left, tied at 102. The arena is shaking, the crowd is on its feet, and Matthews brings the ball across half court with purpose.\nspeaker2: He’s been the heartbeat of this team tonight—27 points, 8 assists, and absolutely fearless attacking the rim. Let’s see if he’s got one more big moment in him.\nspeaker1: High screen from Carter—Matthews uses it, snakes to his left, hesitation—oh he’s got the defender leaning! Pull-up from midrange—\nspeaker2: Off the iron! Rebound tipped… Carter snatches it! Second-chance opportunity, huge for the home team!\nspeaker1: Shot clock resets. Carter backing down—power dribble—spins baseline—\nspeaker2: Oh my goodness! The reverse finish! What body control! And listen to this place—they’re exploding!\nspeaker1: 104–102, just over 40 seconds left. Here comes Denver the other way. Lopez calling for the iso on the right wing.\nspeaker2: He’s been cold all quarter, but superstars take these shots. Ten on the clock—Lopez drives, attacks the seam—kicks to the corner—Burke for three!\nspeaker1: Short! Long rebound—scramble on the floor—who wants it?\nspeaker2: Matthews dives! What a hustle play! He gets the timeout! That might be the play of the night!\nspeaker1: Unreal effort. This place is thunderous. And now the pressure flips to Denver—they need a stop here or this game might be over.",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/two_speaker/5.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/expressive/elevenlabs_two_sports_en_2.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/expressive/gemini_two_sports_en_2.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/expressive/chatgpt_two_sports_en_2.wav"
              }
            ]
          },
          {
            "title": "Drama",
            "dimension": "Expressiveness",
            "referenceHtml": "<strong>Speaker1:</strong> 嗯，就告诉二哥你回来。<br>\n        <strong>Speaker2:</strong> 你又想捉弄谁？<br>\n        <strong>Speaker1:</strong> 不，我要告诉你一件非常重要的事。<br>\n        <strong>Speaker2:</strong> 什么？<br>\n        <strong>Speaker1:</strong> 我爱了一个人。<br>\n        <strong>Speaker2:</strong> 谁？<br>\n        <strong>Speaker1:</strong> 世界上最可爱的。<br>\n        <strong>Speaker2:</strong> 那当然，可是是谁呀？<br>\n        <strong>Speaker1:</strong> 不在我们的亲戚里。<br>\n        <strong>Speaker2:</strong> 那么会是谁呢？<br>\n        <strong>Speaker1:</strong> 回头我告诉你。你知道么，泥土里生米，水底下出珍珠，沙漠里埋黄金。天哪，这都是造物的恩惠呀！<br>\n        <strong>Speaker1:</strong> 我活着，我活着，我在活着！鸣凤！<br>\n        <strong>Speaker2:</strong> 我在这儿呢。<br>\n        <strong>Speaker1:</strong> 好长的时间，你不知道我多想念你。<br>\n        <strong>Speaker2:</strong> 您还要去钓鱼么？<br>\n        <strong>Speaker1:</strong> 不，不，先不。我要在月亮下面看看你。<br>",
            "referenceText": "Speaker1: 嗯，就告诉二哥你回来。\nSpeaker2: 你又想捉弄谁？\nSpeaker1: 不，我要告诉你一件非常重要的事。\nSpeaker2: 什么？\nSpeaker1: 我爱了一个人。\nSpeaker2: 谁？\nSpeaker1: 世界上最可爱的。\nSpeaker2: 那当然，可是是谁呀？\nSpeaker1: 不在我们的亲戚里。\nSpeaker2: 那么会是谁呢？\nSpeaker1: 回头我告诉你。你知道么，泥土里生米，水底下出珍珠，沙漠里埋黄金。天哪，这都是造物的恩惠呀！\nSpeaker1: 我活着，我活着，我在活着！鸣凤！\nSpeaker2: 我在这儿呢。\nSpeaker1: 好长的时间，你不知道我多想念你。\nSpeaker2: 您还要去钓鱼么？\nSpeaker1: 不，不，先不。我要在月亮下面看看你。",
            "image": "./swanbench-speech-demo/assets/photo/scenarios/two_speaker/6.png",
            "models": [
              {
                "name": "Elevenlab",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/expressive/elevenlabs_two_drama_zh_1.wav"
              },
              {
                "name": "Gemini",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/expressive/gemini_two_drama_zh_1.wav"
              },
              {
                "name": "OpenAI",
                "audio": "./swanbench-speech-demo/assets/wav/scenarios/two_speaker/expressive/chatgpt_two_drama_zh_1.wav"
              }
            ]
          }
        ]
      }
    ]
  },
  "ablation": {
    "title": "Ablation Study",
    "summary": "Text-length ablations showing how generation quality changes as the input sequence grows.",
    "chartImage": "./swanbench-speech-demo/assets/photo/8_line_chart.jpg",
    "chartCaption": "Results on sequence length. The horizontal axis represents the number of sentences in the text.",
    "groups": [
      {
        "model": "Spark-TTS",
        "rows": [
          {
            "step": 1,
            "textHtml": "<strong>Reference text:</strong> 啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/1.wav"
          },
          {
            "step": 2,
            "textHtml": "<strong>Reference text:</strong> 啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/2.wav"
          },
          {
            "step": 3,
            "textHtml": "<strong>Reference text:</strong> 啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗?",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗?",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/3.wav"
          },
          {
            "step": 4,
            "textHtml": "<strong>Reference text:</strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/4.wav"
          },
          {
            "step": 5,
            "textHtml": "<strong>Reference text:</strong> 啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊,说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊,说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/5.wav"
          },
          {
            "step": 6,
            "textHtml": "<strong>Reference text:</strong> 啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/6.wav"
          },
          {
            "step": 7,
            "textHtml": "<strong>Reference text:</strong> 啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课, 我学那个资本论, 什么资本会无情的压榨你，剥削你的剩余价值, 资本来到世间，从头到脚都流着血跟肮脏的东西。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课, 我学那个资本论, 什么资本会无情的压榨你，剥削你的剩余价值, 资本来到世间，从头到脚都流着血跟肮脏的东西。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/7.wav"
          },
          {
            "step": 8,
            "textHtml": "<strong>Reference text:</strong> 啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课，我学那个资本论，什么资本会无情的压榨你，剥削你的剩余价值，资本来到世间，从头到脚都流着血跟肮脏的东西，我下午去面试的时候，往那一坐，我可以加班，什么亚里士多德呀，多劳才能多得。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课，我学那个资本论，什么资本会无情的压榨你，剥削你的剩余价值，资本来到世间，从头到脚都流着血跟肮脏的东西，我下午去面试的时候，往那一坐，我可以加班，什么亚里士多德呀，多劳才能多得。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/sparktts/8.wav"
          }
        ]
      },
      {
        "model": "MegaTTS-3",
        "rows": [
          {
            "step": 1,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/1.wav"
          },
          {
            "step": 2,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/2.wav"
          },
          {
            "step": 3,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/3.wav"
          },
          {
            "step": 4,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/4.wav"
          },
          {
            "step": 5,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/5.wav"
          },
          {
            "step": 6,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing. Asking ChatGPT to write one e-mail is the equivalent of pouring out an entire water bottle.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing. Asking ChatGPT to write one e-mail is the equivalent of pouring out an entire water bottle.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/6.wav"
          },
          {
            "step": 7,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing. Asking ChatGPT to write one e-mail is the equivalent of pouring out an entire water bottle. Let that sink in. And the major culprit here is the data centers, warehouses full of computer servers that AI needs to function.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing. Asking ChatGPT to write one e-mail is the equivalent of pouring out an entire water bottle. Let that sink in. And the major culprit here is the data centers, warehouses full of computer servers that AI needs to function.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/7.wav"
          },
          {
            "step": 8,
            "textHtml": "<strong>Reference text: </strong>Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing. Asking ChatGPT to write one e-mail is the equivalent of pouring out an entire water bottle. Let that sink in. And the major culprit here is the data centers, warehouses full of computer servers that AI needs to function. Tech companies are trying to build more of these data centers, but people who live nearby are protesting them, often saying that they're going to compete for their electricity and use up their water.",
            "referenceText": "Hi, I'm Rose Rimmler. I'm filling in for Wendy Zuckerman. And this is Science versus. This is the show that pits facts against filling the world with AI data centers. Today on the show AI and the Environment, Lately we've been hearing a lot about how power hungry AI is. AI uses a ton of electricity, straining the nation's aging power grid and creating more planet-warming emissions, and how thirsty it is. The amount of water that AI uses is astonishing. Asking ChatGPT to write one e-mail is the equivalent of pouring out an entire water bottle. Let that sink in. And the major culprit here is the data centers, warehouses full of computer servers that AI needs to function. Tech companies are trying to build more of these data centers, but people who live nearby are protesting them, often saying that they're going to compete for their electricity and use up their water.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_1/MegaTTS3/8.wav"
          }
        ]
      },
      {
        "model": "CosyVoice2",
        "rows": [
          {
            "step": 1,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right?",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right?",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/1.wav"
          },
          {
            "step": 2,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything.",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/2.wav"
          },
          {
            "step": 3,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks.",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/3.wav"
          },
          {
            "step": 4,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\"",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\"",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/4.wav"
          },
          {
            "step": 5,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading.",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/5.wav"
          },
          {
            "step": 6,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading. Now I'm starting to lose it. Her response: \\\"I didn't hear you.\\\" But before I could say a word, I heard the piano start playing again.",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading. Now I'm starting to lose it. Her response: \\\"I didn't hear you.\\\" But before I could say a word, I heard the piano start playing again.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/6.wav"
          },
          {
            "step": 7,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading. Now I'm starting to lose it. Her response: \\\"I didn't hear you.\\\" But before I could say a word, I heard the piano start playing again. And that's the story of how I lost my mind. The end. I just wanted my daughters to take a little ownership for getting out the door in time. But then I remembered something I teach management teams: You can't inspire accountability in others until you model it yourself. That's when I realized I wasn't taking any accountability for this problem.",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading. Now I'm starting to lose it. Her response: \\\"I didn't hear you.\\\" But before I could say a word, I heard the piano start playing again. And that's the story of how I lost my mind. The end. I just wanted my daughters to take a little ownership for getting out the door in time. But then I remembered something I teach management teams: You can't inspire accountability in others until you model it yourself. That's when I realized I wasn't taking any accountability for this problem.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/7.wav"
          },
          {
            "step": 8,
            "textHtml": "<strong>Reference text: </strong>Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading. Now I'm starting to lose it. Her response: \\\"I didn't hear you.\\\" But before I could say a word, I heard the piano start playing again. And that's the story of how I lost my mind. The end. I just wanted my daughters to take a little ownership for getting out the door in time. But then I remembered something I teach management teams: You can't inspire accountability in others until you model it yourself. That's when I realized I wasn't taking any accountability for this problem. I was blaming it totally on my daughters. So I tried a different approach and looked in the mirror. What was I doing or not doing that may be contributing to this problem? Then it hit me. I knew when they needed to be finished with breakfast, dressed, groomed, and ready to leave. But did they? I also knew what time it was. But there were no clocks in their bathrooms. Which I discovered is like a different dimension for my girls where time ceases to exist.",
            "referenceText": "Are there any other parents here who have struggled to get your kids out the door on time? Yeah, so you know, right? It's like herding kittens. My wife and I would start nagging our three daughters long before it was time to leave, but that obviously wasn't working because we were always late for everything. But one day was a complete gong show. Five minutes before we needed to leave for an important event, I found my oldest daughter on the porch reading, my middle daughter was playing the piano, and my youngest daughter wasn't wearing any socks. So I told them, \\\"Stop reading, stop playing the piano, put on your socks, and everybody get in the car.\\\" Five minutes later, nobody was in the car. On my way to help my youngest daughter wear her socks, I noticed my oldest daughter was still on the porch reading. Now I'm starting to lose it. Her response: \\\"I didn't hear you.\\\" But before I could say a word, I heard the piano start playing again. And that's the story of how I lost my mind. The end. I just wanted my daughters to take a little ownership for getting out the door in time. But then I remembered something I teach management teams: You can't inspire accountability in others until you model it yourself. That's when I realized I wasn't taking any accountability for this problem. I was blaming it totally on my daughters. So I tried a different approach and looked in the mirror. What was I doing or not doing that may be contributing to this problem? Then it hit me. I knew when they needed to be finished with breakfast, dressed, groomed, and ready to leave. But did they? I also knew what time it was. But there were no clocks in their bathrooms. Which I discovered is like a different dimension for my girls where time ceases to exist.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_2/cosyvoice2/8.wav"
          }
        ]
      },
      {
        "model": "F5TTS",
        "rows": [
          {
            "step": 1,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now.",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/1.wav"
          },
          {
            "step": 2,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual.",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/2.wav"
          },
          {
            "step": 3,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends.",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/3.wav"
          },
          {
            "step": 4,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me?",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me?",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/4.wav"
          },
          {
            "step": 5,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17.",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/5.wav"
          },
          {
            "step": 6,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17. I've dated pretty consistently, with a few boyfriends, and very short breaks in between, so I haven't really been single. It's a little daunting to be in this place again.",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17. I've dated pretty consistently, with a few boyfriends, and very short breaks in between, so I haven't really been single. It's a little daunting to be in this place again.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/6.wav"
          },
          {
            "step": 7,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17. I've dated pretty consistently, with a few boyfriends, and very short breaks in between, so I haven't really been single. It's a little daunting to be in this place again. This time, I know I should be single longer than just two or three months — maybe for a year.",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17. I've dated pretty consistently, with a few boyfriends, and very short breaks in between, so I haven't really been single. It's a little daunting to be in this place again. This time, I know I should be single longer than just two or three months — maybe for a year.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/7.wav"
          },
          {
            "step": 8,
            "textHtml": "<strong>Reference text: </strong>We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17. I've dated pretty consistently, with a few boyfriends, and very short breaks in between, so I haven't really been single. It's a little daunting to be in this place again. This time, I know I should be single longer than just two or three months — maybe for a year. I feel it in my gut, and I know it's right, but it's daunting.",
            "referenceText": "We really deeply loved each other. The way it ended was so pleasant that I think I can talk about it without crying right now. It's only been a week, and I can talk about it because it was mutual. We communicated, got closure, and decided to remain friends. It was as perfect a breakup as possible, but it's still tough. So, what does this mean for me? Well, now I'm single, and being single is interesting because I haven't been single much in my life since I was 17. I've dated pretty consistently, with a few boyfriends, and very short breaks in between, so I haven't really been single. It's a little daunting to be in this place again. This time, I know I should be single longer than just two or three months — maybe for a year. I feel it in my gut, and I know it's right, but it's daunting.",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_en_3/F5TTS/8.wav"
          }
        ]
      },
      {
        "model": "VibeVoice",
        "rows": [
          {
            "step": 1,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/1.wav"
          },
          {
            "step": 2,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/2.wav"
          },
          {
            "step": 3,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗？",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗？",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/3.wav"
          },
          {
            "step": 4,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/4.wav"
          },
          {
            "step": 5,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊,说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊,说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/5.wav"
          },
          {
            "step": 6,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/6.wav"
          },
          {
            "step": 7,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课, 我学那个资本论, 什么资本会无情的压榨你，剥削你的剩余价值, 资本来到世间，从头到脚都流着血跟肮脏的东西。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课, 我学那个资本论, 什么资本会无情的压榨你，剥削你的剩余价值, 资本来到世间，从头到脚都流着血跟肮脏的东西。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/7.wav"
          },
          {
            "step": 8,
            "textHtml": "<strong>Reference text: </strong>啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课，我学那个资本论，什么资本会无情的压榨你，剥削你的剩余价值，资本来到世间，从头到脚都流着血跟肮脏的东西，我下午去面试的时候，往那一坐，我可以加班，什么亚里士多德呀，多劳才能多得。",
            "referenceText": "啊我是去年刚刚大学毕业的，我这个大学专业学的是哲学啊，大家一般听到那个反应就是哇，那就是有文化没工作，这个我读哲学确实是不太好找工作，而且我身边有些朋友还会调侃我，说，找不到工作怎么了，你们学哲学的人不是都很通透吗，你虽然找不到工作，但是你可以辩证地看待这个问题啊，我咋辩证啊，说实话我真的一点都不通透，因为我学完哲学吧，跟大家学任何专业一样，还是要出来找工作打工的，我发现现实生活跟我学的不一样的时候，我只会更加矛盾。我那时候找工作的时候，我上午还在上课，我学那个资本论，什么资本会无情的压榨你，剥削你的剩余价值，资本来到世间，从头到脚都流着血跟肮脏的东西，我下午去面试的时候，往那一坐，我可以加班，什么亚里士多德呀，多劳才能多得。",
            "audio": "./swanbench-speech-demo/assets/wav/ablation/results_zh_2/vibevoice/8.wav"
          }
        ]
      }
    ]
  }
};
