let data = `
296 land

3 sun

216 too

197 huge

237 dont

249 such

81 noun

113 student

30 brown

111 complete

157 play

165 cook

188 yard

195 clock

105 would

116 plain

293 excite

137 fire

178 wish

211 cool

87 child

275 past

261 colony

186 oil

292 dog

125 back

289 money

103 kind

19 open

241 finger

100 touch

248 are

29 dad

236 am

74 modern

200 meant

15 ocean

229 pitch

151 suit

46 town

59 east

194 over

108 group

65 good

114 kind

170 down

89 band

214 especially

164 organ

12 of

85 fire

73 out

205 area

167 touch

123 happen

76 sat

120 electric

119 wrote

66 buy

8 lot

117 stop

133 corn

70 where

274 check

75 live

118 best

95 hold

9 cause

259 grand

223 present

4 indicate

150 slave

281 we

23 like

110 visit

210 state

20 morning

98 true

72 are

189 ball

135 history

155 seat

6 rain

7 less

146 glass

154 tone

226 song

202 fair

93 element

80 speed

190 produce

71 quotient

162 sand

143 begin

298 moment

122 offer

41 probable

68 all

255 necessary

153 post

56 cent

288 happen

250 speech

243 object

234 silver

25 third

299 crease

145 wait

176 triangle

27 idea

233 clothe

139 young

62 discuss

147 field

212 company

96 capital

253 compare

60 chart

300 possible

187 written

283 remember

168 mile

69 cold

152 lady

290 felt

265 against

42 skin

183 prepare

268 he

271 card

130 organ

84 object

231 our

22 major

86 discuss

13 system

24 hole

287 above

184 they

295 produce

256 straight

57 level

161 though

97 modern

90 dry

263 bought

126 milk

280 make

94 show

242 middle

92 center

33 blood

203 speak

107 prove

40 select

83 power

35 come

156 brown

5 experiment

39 strong

262 hurry

276 touch

279 reach

166 case

64 beat

124 over

144 dry

47 hill

142 company

1 opposite

159 work

34 field

284 felt

193 prepare

49 now

50 his

136 stay

232 toward

221 observe

218 time

102 stop

91 possible

78 card

224 prepare

61 current

238 compare

67 neighbor

134 thus

131 include

206 copy

182 bit

227 stead

138 does

285 general

48 solve

112 glad

16 duck

63 offer

129 happen

267 ball

37 bread

225 like

2 machine

257 come

160 any

291 band

45 it

32 section

177 close

277 heavy

254 produce

106 got

149 possible

82 insect

207 way

230 before

54 men

264 bird

181 ease

174 trade

28 winter

246 am

148 repeat

31 first

21 to

11 each

140 guide

172 column

52 single

213 remember

36 wild

272 major

99 coast

245 class

217 done

252 jump

88 sister

173 feel

127 check

199 fire

278 nine

185 indicate

44 parent

273 whole

77 her

101 the

294 temperature

258 design

175 big

58 skill

235 friend

196 hit

169 wait

240 instant

14 blow

17 about

260 chick

204 answer

270 man

26 material

43 current

10 think

198 print

163 nor

180 better

282 example

220 people

121 drink

222 gun

215 together

244 cost

51 require

179 or

128 people

247 planet

219 ease

55 ready

239 enough

251 sugar

109 deal

79 with

38 us

228 share

286 office

141 protect

269 low

104 thus

18 farm

209 oxygen

266 fire

132 force

297 select

171 paragraph

191 always

115 poem

53 chick

158 planet

208 fact

192 moment

201 term
`;

let arr_data = data.split("\n").join(" ").split(" ");

let obj = {};
let new_arr = [];

while (!!arr_data.length) {
  let element_arr = arr_data[0];

  if (element_arr === "") {
    if (!!obj.number && !!obj.string) {
      new_arr.push(obj);
      obj = {};
    }
  }

  if (!!Number.isInteger(Number(element_arr))) {
    obj.number = Number(element_arr);
  }
  if (!Number.isInteger(Number(element_arr))) {
    obj.string = element_arr;
  }
  arr_data.splice(0, 1);
}

const decode = (arr) => {
  let sort_message = [];
  let word;
  let iteration = 1;
  while (!!arr.length) {
    for (i = 0; i < iteration; i++) {
      word = "";
      let element = arr[0].number;
      let index = 0;
      arr.forEach((elem) => {
        if (element > elem.number) {
          element = elem.number;
        }
        let is_large_number = (el) => el.number === element;
        index = arr.findIndex(is_large_number);
      });
      word = arr[index].string;
      arr.splice(index, 1);
    }
    sort_message.push(word);
    iteration++;
  }
  const result = sort_message.join(" ");
  console.log(result);
  return result;
};

decode(new_arr);
