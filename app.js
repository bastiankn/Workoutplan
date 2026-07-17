'use strict';

// Data-first architecture: edit the arrays below to maintain the site.
const gymExercises = [
  { id:'bench-press', name:'Bench Press', section:'Gym', category:'Chest', description:'Primary horizontal barbell press.', cues:['Use a closed, full-thumb grip; the original thumbless-grip note is not recommended for general training','Set the bench angle or rack position so the bar clears safely','Lower under control toward the mid-to-lower chest; use the deepest pain-free range you can control rather than stopping at an arbitrary 3–4 cm','Keep wrists stacked over forearms and shoulder blades stable','Personal preference: a flat or slightly inclined Smith-machine variation is acceptable'], setsReps:'3–4 sets × 5–10 reps', rest:'2–3 minutes', intensity:'Usually 1–3 RIR; use safeties or a spotter for hard sets', progression:'When all sets reach the top of the range with stable technique, add the smallest practical load.', alternatives:['Incline Bench Press','Smith-Machine Press'], equivalents:['Ring Push-Ups','Ring Dips'], equipment:['Barbell','Bench'], tags:['chest','push','barbell'] },
  { id:'incline-bench', name:'Incline Bench Press', section:'Gym', category:'Chest', description:'Incline press emphasizing the upper chest and anterior shoulder.', cues:['Use a moderate incline that permits comfortable pressing; roughly 15–45° is a practical starting range','Personal note: 60° was previously used, but this shifts more demand toward the shoulders','Keep shoulder blades stable and lower the bar with control'], setsReps:'3–4 sets × 6–12 reps', rest:'2–3 minutes', intensity:'1–3 RIR', progression:'Add load after reaching the top of the rep range on every set without shortening the range.', alternatives:['Bench Press','Incline Dumbbell Press'], equivalents:['Feet-Elevated Ring Push-Ups'], equipment:['Barbell','Bench'], tags:['chest','push','barbell'] },
  { id:'gym-dips', name:'Dips', section:'Gym', category:'Chest', description:'Compound pressing movement for chest and triceps.', cues:['Use a range that keeps the shoulders comfortable; 90° elbow flexion is a reference, not a mandatory stop','Lean slightly forward for more chest emphasis','Keep the forearms controlled and avoid bouncing from the bottom'], setsReps:'3 sets × 6–12 reps', rest:'2–3 minutes', intensity:'1–3 RIR; stop before shoulder discomfort or loss of control', progression:'First increase clean repetitions, then add a small load.', alternatives:['Assisted Dips','Machine Dips'], equivalents:['Ring Dips'], equipment:['Dip bars'], tags:['chest','triceps','push'] },
  { id:'cable-crossover', name:'Cable Crossover', section:'Gym', category:'Chest', description:'Cable chest isolation through horizontal adduction.', cues:['Keep a soft, consistent elbow bend instead of locking the arms','Bring the hands together on a path that feels natural for the shoulders','Use a staggered or even stance according to balance','Personal preference: low-to-high cables and a lighter load'], setsReps:'2–4 sets × 10–20 reps', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Add reps before load; keep the same controlled arc and stretch.', alternatives:['Dumbbell Fly'], equivalents:['Ring Flys'], equipment:['Cable station'], tags:['chest','isolation','cable'] },
  { id:'pull-ups-gym', name:'Pull-Ups', section:'Gym', category:'Back', description:'Vertical bodyweight pull.', cues:['Begin from a controlled active hang','Drive the elbows down toward the ribs rather than forcing them outward','Pull as high as possible without craning the neck or swinging','Use a grip width that feels comfortable for shoulders and elbows'], setsReps:'3–4 sets × 4–10 reps', rest:'2–3 minutes', intensity:'1–3 RIR; stop when full-range reps are no longer repeatable', progression:'Build reps across all sets, then add a small external load.', alternatives:['Lat Pulldown','Band-Assisted Pull-Up'], equivalents:['Pull-Ups','Weighted Pull-Ups'], equipment:['Pull-up bar'], tags:['back','pull','bodyweight'] },
  { id:'lat-pulldown', name:'Lat Pulldown', section:'Gym', category:'Back', description:'Cable-based vertical pull for the lats.', cues:['Use a comfortable medium-to-wide grip','Pull toward the upper chest without leaning far back','Keep the thighs secured and torso stable','Allow a controlled overhead stretch while maintaining shoulder comfort'], setsReps:'3–4 sets × 8–12 reps', rest:'90–150 seconds', intensity:'1–3 RIR', progression:'Add load after completing the top of the range without torso swing.', alternatives:['Pull-Ups'], equivalents:['Pull-Ups'], equipment:['Cable station'], tags:['back','lats','pull','cable'] },
  { id:'rows', name:'Single-Arm Row', section:'Gym', category:'Back', description:'Unilateral horizontal row using a dumbbell or cable.', cues:['Brace the torso','Pull the elbow toward the hip or lower ribs','Avoid rotating to create extra range'], setsReps:'3–4 sets × 8–15 reps per side', rest:'90–150 seconds', intensity:'1–3 RIR', progression:'Add reps, then load, while keeping both sides equally controlled.', alternatives:['Bent-Over Row','Chest-Supported Row'], equivalents:['Ring Rows'], equipment:['Dumbbell or cable'], tags:['back','row','pull'] },
  { id:'pullovers', name:'Pullover / Straight-Arm Pulldown', section:'Gym', category:'Back', description:'Straight-arm lat-focused isolation movement.', cues:['Use a smooth arc from overhead toward the thighs','Keep a small fixed elbow bend','Drive through the shoulders while minimizing elbow flexion','Use a load that preserves the overhead stretch'], setsReps:'2–3 sets × 12–20 reps', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Increase repetitions before adding load; stop if shoulder position becomes uncomfortable.', alternatives:['Straight-Arm Pulldown','Dumbbell Pullover'], equivalents:['Tuck Front-Lever Raise'], equipment:['Cable or dumbbell'], tags:['back','lats','isolation'] },
  { id:'bent-row', name:'Bent-Over Row', section:'Gym', category:'Back', description:'Free-weight horizontal pull.', cues:['Brace the trunk and keep a stable hip hinge','Pull the bar toward the lower ribs','Use only the range that can be completed without jerking or losing torso position'], setsReps:'3–4 sets × 6–12 reps', rest:'2–3 minutes', intensity:'1–3 RIR', progression:'Add load after all sets reach the top of the range with a stable torso.', alternatives:['Chest-Supported Row','Single-Arm Row'], equivalents:['Ring Rows','Front Lever Rows'], equipment:['Barbell'], tags:['back','row','barbell'] },
  { id:'ohp', name:'Overhead Press', section:'Gym', category:'Shoulders & Arms', description:'Standing or seated vertical press.', cues:['Brace the trunk and keep ribs controlled','Press through a pain-free overhead path','Finish with the load balanced over the body rather than leaning back','Historical personal note: 4–5 ramping sets followed by a reduction set was previously used; treat this as optional, not mandatory'], setsReps:'3–4 working sets × 5–10 reps', rest:'2–3 minutes', intensity:'1–3 RIR', progression:'Add load after reaching the top of the range without excessive back extension.', alternatives:['Dumbbell Shoulder Press'], equivalents:['Pike Push-Ups','Handstand Push-Up progression'], equipment:['Barbell or dumbbells'], tags:['shoulders','push','strength'] },
  { id:'lateral-raise', name:'Lateral Raise', section:'Gym', category:'Shoulders & Arms', description:'Lateral-delt isolation.', cues:['Raise in a comfortable scapular plane','Lead with the elbows without shrugging','Use controlled repetitions rather than momentum'], setsReps:'2–4 sets × 10–20 reps', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Add reps before using the next small load increment.', alternatives:['Cable Lateral Raise'], equivalents:['Ring Y-Raise'], equipment:['Dumbbells or cable'], tags:['shoulders','isolation'] },
  { id:'face-pull-row', name:'Incline Rear-Delt Row / Face Pull', section:'Gym', category:'Shoulders & Arms', description:'Rear-delt and upper-back movement.', cues:['Use a light load and controlled arc','For the incline row, support the chest and pull the elbows outward only as far as the shoulders remain comfortable','For face pulls, pull toward the forehead with forearms roughly aligned with the cable','Do not force the arms together or chase range with shoulder elevation'], setsReps:'2–4 sets × 12–20 reps', rest:'60–90 seconds', intensity:'2–4 RIR', progression:'Add reps or a small load only if shoulder position stays controlled.', alternatives:['Reverse Fly','Face Pull'], equivalents:['Ring Face Pull'], equipment:['Incline bench or cable'], tags:['shoulders','scapula','joint-health','pull'] },
  { id:'isolated-curls', name:'Single-Arm Biceps Curl', section:'Gym', category:'Shoulders & Arms', description:'Controlled unilateral biceps isolation.', cues:['Personal preference: start with the weaker left arm and match its repetitions on the right','Briefly contract at the top without moving the shoulder forward','Lower under control','An optional final-rep hold is fine if elbow position remains stable'], setsReps:'2–4 sets × 8–15 reps per side', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Reach the top of the range on both sides before adding load.', alternatives:['Cable Curl'], equivalents:['Ring Biceps Curl'], equipment:['Dumbbells'], tags:['biceps','arms','isolation'] },
  { id:'skullcrusher', name:'Skull Crusher', section:'Gym', category:'Shoulders & Arms', description:'Elbow-extension isolation for the triceps.', cues:['Keep the upper arms reasonably stable','Lower behind the forehead if that is more comfortable for the elbows','Historical personal note: pairing this with biceps work is optional; supersets are a time-saving choice, not a rule'], setsReps:'2–4 sets × 8–15 reps', rest:'60–120 seconds', intensity:'1–3 RIR', progression:'Add reps before load and stop if elbow irritation develops.', alternatives:['Triceps Pushdown'], equivalents:['Ring Triceps Extensions'], equipment:['Barbell or dumbbells'], tags:['triceps','arms','isolation'] },
  { id:'biceps-curls', name:'Cable Biceps Curl', section:'Gym', category:'Shoulders & Arms', description:'Cable curl with continuous resistance.', cues:['Keep the elbows stable and avoid leaning back','Personal preference: a bench may be placed at the cable tower and the handle curled toward the forehead'], setsReps:'2–4 sets × 10–15 reps', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Add reps before load while preserving shoulder and elbow position.', alternatives:['Dumbbell Curl'], equivalents:['Ring Biceps Curl'], equipment:['Cable station'], tags:['biceps','arms'] },
  { id:'triceps-pushdown', name:'Triceps Pushdown', section:'Gym', category:'Shoulders & Arms', description:'Cable triceps isolation.', cues:['Keep the upper arms close to the torso','Extend the elbows without using torso momentum','Use a handle that feels comfortable for the wrists'], setsReps:'2–4 sets × 10–20 reps', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Add repetitions before increasing the load.', alternatives:['Skull Crusher'], equivalents:['Ring Triceps Extensions'], equipment:['Cable station'], tags:['triceps','arms','cable'] },
  { id:'hammer-curl', name:'Incline Hammer Curl', section:'Gym', category:'Shoulders & Arms', description:'Incline neutral-grip curl for the elbow flexors.', cues:['Keep the shoulders against the bench','Maintain a neutral wrist','Lower under control without forcing shoulder extension'], setsReps:'2–3 sets × 8–15 reps', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Add reps across all sets, then use the next practical load.', alternatives:['Standing Hammer Curl'], equivalents:['Neutral-Grip Ring Curl'], equipment:['Dumbbells','Incline bench'], tags:['biceps','forearms','arms'] },
  { id:'squats', name:'Squat', section:'Gym', category:'Legs', description:'Primary bilateral squat pattern.', cues:['Keep the gaze neutral on a fixed point ahead; do not deliberately look at the ceiling','Brace the trunk and maintain your natural spinal position rather than forcing a hollow lower back','Use a stance and toe angle that let the knees track comfortably over the feet','Squat as deep as you can control without pain or loss of balance; parallel is a reference, not a universal requirement','Personal option: use a front-squat variation'], setsReps:'3–4 sets × 5–10 reps', rest:'2–4 minutes', intensity:'1–3 RIR; use rack safeties for challenging sets', progression:'Add load after completing the top of the range with consistent depth and bracing.', alternatives:['Front Squat','Hack Squat'], equivalents:['Pistol Squats','Bulgarian Split Squats'], equipment:['Barbell','Rack'], tags:['legs','squat','barbell'] },
  { id:'leg-press', name:'Leg Press', section:'Gym', category:'Legs', description:'Machine-based compound leg press.', cues:['Keep the feet fully supported','Lower only as far as the pelvis and lower back remain controlled','Track the knees in line with the feet and avoid locking out forcefully'], setsReps:'3–4 sets × 8–15 reps', rest:'2–3 minutes', intensity:'1–3 RIR', progression:'Add reps, then load, without reducing depth.', alternatives:['Squat'], equivalents:['Bulgarian Split Squats','Step-Ups'], equipment:['Leg press'], tags:['legs','squat','machine'] },
  { id:'leg-extension', name:'Leg Extension', section:'Gym', category:'Legs', description:'Knee-extension isolation.', cues:['Align the machine pivot with the knee as closely as practical','Extend smoothly and pause briefly at the top','Use a pain-free range rather than forcing lockout'], setsReps:'2–4 sets × 10–20 reps', rest:'60–90 seconds', intensity:'1–3 RIR', progression:'Add reps before increasing the load.', alternatives:['Supported Sissy Squat'], equivalents:['Reverse Nordic Curls'], equipment:['Leg extension machine'], tags:['legs','quadriceps','isolation'] },
  { id:'leg-curl', name:'Leg Curl', section:'Gym', category:'Legs', description:'Knee-flexion hamstring isolation.', cues:['Align the machine comfortably with the knee','Keep the hips stable','Control both the curl and return'], setsReps:'3–4 sets × 8–15 reps', rest:'60–120 seconds', intensity:'1–3 RIR', progression:'Add reps before load without shortening the range.', alternatives:['Romanian Deadlift','Slider Leg Curl'], equivalents:['Nordic Curls'], equipment:['Leg curl machine'], tags:['legs','hamstrings','isolation'] },
  { id:'forearm-curl', name:'Supported Barbell Wrist Curl', section:'Gym', category:'Accessories', description:'Supported wrist-flexion exercise.', cues:['Use an approximately shoulder-width grip','Support the forearms on the bench','Move through a comfortable wrist range without momentum'], setsReps:'2–3 sets × 12–20 reps', rest:'60–90 seconds', intensity:'2–3 RIR', progression:'Add repetitions before load; stop if wrist or elbow irritation appears.', alternatives:['Dumbbell Wrist Curl'], equivalents:['Towel Hang'], equipment:['Barbell','Bench'], tags:['forearms','grip','accessory'] },
  { id:'abs-video', name:'Core Routine', section:'Gym', category:'Accessories', description:'Existing 8-minute ab-workout reference.', cues:['Keep repetitions controlled','Scale any movement that causes lower-back or neck discomfort'], setsReps:'One 8-minute routine', rest:'As prescribed by the routine', intensity:'Stop 1–3 reps before technique breaks on repeated movements', progression:'Improve control or choose a harder variation; do not add difficulty at the expense of trunk position.', alternatives:['Hollow Body Hold'], equivalents:['L-Sit progression'], equipment:['Bodyweight'], tags:['core','accessory'], link:'https://www.youtube.com/watch?v=9oAbP7LHT9Q' },
  { id:'neck-curls', name:'Neck Curl', section:'Gym', category:'Accessories', description:'Optional direct neck-flexion work; confirm the intended method before loading heavily.', cues:['Begin with a very light load and small, comfortable range','Move slowly without bouncing','Stop for pain, tingling, dizziness, headache, or radiating symptoms'], setsReps:'For review: begin conservatively with 1–2 sets × 10–20 controlled reps', rest:'60–90 seconds', intensity:'Keep several reps in reserve', progression:'Confirm exercise setup and tolerance before progressing load.', alternatives:['Isometric Neck Flexion'], equivalents:[], equipment:['Plate or harness'], tags:['neck','accessory','review'] },
  { id:'shrugs', name:'Shrug', section:'Gym', category:'Accessories', description:'Upper-trapezius isolation.', cues:['Elevate the shoulders straight up without rolling them','Pause briefly, then lower under control','Keep the neck relaxed and neutral'], setsReps:'2–4 sets × 8–15 reps', rest:'60–120 seconds', intensity:'1–3 RIR', progression:'Add reps, then load, without shortening the controlled range.', alternatives:['Farmer’s Walk'], equivalents:['Ring Support Shrug'], equipment:['Dumbbells or barbell'], tags:['traps','accessory'] },
  { id:'calf-raises-gym', name:'Calf Raise', section:'Gym', category:'Accessories', description:'Loaded ankle plantar flexion.', cues:['Use a controlled stretch at the bottom','Rise through the ball of the foot without rolling the ankle','Pause briefly at the top'], setsReps:'3–4 sets × 8–20 reps', rest:'60–120 seconds', intensity:'1–3 RIR', progression:'Add reps, then load, while preserving full controlled range.', alternatives:['Seated Calf Raise'], equivalents:['Single-Leg Calf Raises'], equipment:['Machine or free weight'], tags:['calves','legs','accessory'] }
];

const calisthenicsExercises = [
  { id:'ring-pushups', name:'Ring Push-Ups', section:'Calisthenics', category:'Push', description:'Unstable horizontal press with freely moving hands.', cues:['Keep rings close to the body','Maintain a rigid trunk'], progression:'Elevate feet or add load; regress by raising the rings.', alternatives:['Incline Ring Push-Ups'], equivalents:['Bench Press'], equipment:['Rings'], difficulty:'Beginner–intermediate', tags:['chest','push','rings'] },
  { id:'ring-dips', name:'Ring Dips', section:'Calisthenics', category:'Push', description:'Deep compound press requiring ring stability.', cues:['Build a stable support first','Control the bottom position'], progression:'Band-assisted → strict → weighted.', alternatives:['Straight-Bar Dips'], equivalents:['Dips'], equipment:['Rings'], difficulty:'Intermediate–advanced', tags:['chest','triceps','push','rings'] },
  { id:'archer-pushups', name:'Archer Push-Ups', section:'Calisthenics', category:'Push', description:'Unilateral-biased horizontal push.', cues:['Shift the torso over the working hand','Keep the long arm controlled'], progression:'Wider stance → assisted one-arm push-up.', alternatives:['Uneven Push-Up'], equivalents:['Single-Arm Dumbbell Press'], equipment:['Floor'], difficulty:'Intermediate', tags:['chest','push','unilateral'] },
  { id:'pppu', name:'Pseudo Planche Push-Ups', section:'Calisthenics', category:'Push', description:'Forward-lean push-up supporting planche strength.', cues:['Protract the shoulder blades','Lean while keeping elbows controlled'], progression:'Increase lean gradually; regress with less lean.', alternatives:['Planche Lean'], equivalents:['Close-Grip Bench Press'], equipment:['Floor or parallettes'], difficulty:'Intermediate–advanced', tags:['chest','shoulders','planche','push'] },
  { id:'pike-pushups', name:'Pike Push-Ups', section:'Calisthenics', category:'Push', description:'Bodyweight vertical press and HSPU foundation.', cues:['Drive the head forward and down','Keep hips high'], progression:'Elevate feet → wall HSPU work.', alternatives:['Incline Pike Push-Up'], equivalents:['Overhead Press'], equipment:['Floor or box'], difficulty:'Beginner–intermediate', tags:['shoulders','push','handstand'] },
  { id:'ring-flys', name:'Ring Flys', section:'Calisthenics', category:'Push', description:'Long-lever chest isolation on rings.', cues:['Keep a soft elbow','Control the stretch'], progression:'Lower rings or lengthen the lever; regress by raising rings.', alternatives:['Ring Push-Ups'], equivalents:['Cable Crossover'], equipment:['Rings'], difficulty:'Intermediate', tags:['chest','isolation','rings'] },
  { id:'ring-triceps', name:'Ring Triceps Extensions', section:'Calisthenics', category:'Push', description:'Scalable bodyweight elbow extension.', cues:['Keep elbows pointing forward','Move through the elbows'], progression:'Lower rings or move feet back.', alternatives:['Bench Triceps Extension'], equivalents:['Skull Crusher','Triceps Pushdown'], equipment:['Rings'], difficulty:'Beginner–intermediate', tags:['triceps','push','rings'] },
  { id:'pullups', name:'Pull-Ups', section:'Calisthenics', category:'Pull', description:'Foundational vertical bodyweight pull.', cues:['Start from an active shoulder','Pull the chest toward the bar'], progression:'Band-assisted → strict → weighted.', alternatives:['Chin-Ups'], equivalents:['Pull-Up','Lat Pulldown'], equipment:['Pull-up bar'], difficulty:'Intermediate', tags:['back','pull','lats'] },
  { id:'weighted-pullups', name:'Weighted Pull-Ups', section:'Calisthenics', category:'Pull', description:'Strength-focused loaded pull-up.', cues:['Use clean full-range repetitions','Avoid swinging'], progression:'Add load only after consistent strict reps.', alternatives:['Pull-Ups'], equivalents:['Heavy Lat Pulldown'], equipment:['Pull-up bar','Dip belt or weight'], difficulty:'Advanced', tags:['back','pull','strength'] },
  { id:'ring-rows', name:'Ring Rows', section:'Calisthenics', category:'Pull', description:'Scalable horizontal bodyweight row.', cues:['Keep hips extended','Pull rings toward the ribs'], progression:'Move feet forward → elevate feet → add load.', alternatives:['Incline Ring Row'], equivalents:['Single-Arm Row','Bent-Over Row'], equipment:['Rings'], difficulty:'Beginner–intermediate', tags:['back','row','rings','pull'] },
  { id:'scap-pullups', name:'Scapular Pull-Ups', section:'Calisthenics', category:'Pull', description:'Straight-arm scapular depression and elevation.', cues:['Keep elbows straight','Use a small controlled range'], progression:'Add pauses; regress with feet-supported hangs.', alternatives:['Active Hang'], equivalents:['Straight-Arm Pulldown'], equipment:['Pull-up bar'], difficulty:'Beginner', tags:['scapula','joint-health','pull'] },
  { id:'front-lever-rows', name:'Front Lever Rows', section:'Calisthenics', category:'Pull', description:'Horizontal row performed in a lever progression.', cues:['Keep posterior pelvic tilt','Pull without losing the lever shape'], progression:'Tuck → advanced tuck → longer lever.', alternatives:['Tuck Front Lever Row'], equivalents:['Bent-Over Row'], equipment:['Rings or bar'], difficulty:'Advanced', tags:['back','front-lever','row','pull'] },
  { id:'muscleup-drills', name:'Muscle-Up Drills', section:'Calisthenics', category:'Pull', description:'Explosive pull and transition practice.', cues:['Prioritize height before turnover','Practice a close transition'], progression:'Low-ring transition → band-assisted → strict.', alternatives:['Chest-to-Bar Pull-Up'], equivalents:['Explosive Pull-Up + Dip'], equipment:['Bar or rings','Optional band'], difficulty:'Intermediate–advanced', tags:['muscle-up','pull','skill'] },
  { id:'pistol-squats', name:'Pistol Squats', section:'Calisthenics', category:'Legs', description:'Full-range unilateral squat.', cues:['Track the knee over the toes','Control the bottom position'], progression:'Box → assisted → eccentric → full.', alternatives:['Assisted Pistol'], equivalents:['Squat'], equipment:['Bodyweight'], difficulty:'Intermediate–advanced', tags:['legs','squat','unilateral','pistol'] },
  { id:'bulgarian-split', name:'Bulgarian Split Squats', section:'Calisthenics', category:'Legs', description:'Rear-foot-elevated unilateral squat.', cues:['Keep the front foot planted','Control the descent'], progression:'Increase range, tempo, then load.', alternatives:['Split Squat'], equivalents:['Leg Press'], equipment:['Bench or box'], difficulty:'Beginner–intermediate', tags:['legs','squat','unilateral'] },
  { id:'stepups', name:'Step-Ups', section:'Calisthenics', category:'Legs', description:'Single-leg step pattern for controlled leg strength.', cues:['Drive through the working leg','Minimize push-off from the trailing foot'], progression:'Increase box height or add load.', alternatives:['Low Step-Up'], equivalents:['Leg Press'], equipment:['Box or bench'], difficulty:'Beginner', tags:['legs','unilateral'] },
  { id:'nordic-curls', name:'Nordic Curls', section:'Calisthenics', category:'Legs', description:'High-tension eccentric knee-flexion exercise.', cues:['Keep hips extended','Control as much range as possible'], progression:'Assisted eccentric → full eccentric → concentric.', alternatives:['Slider Leg Curl'], equivalents:['Leg Curl'], equipment:['Foot anchor'], difficulty:'Advanced', tags:['hamstrings','legs','joint-health'] },
  { id:'reverse-nordic', name:'Reverse Nordic Curls', section:'Calisthenics', category:'Legs', description:'Kneeling long-length quadriceps exercise.', cues:['Keep hips extended','Move as one line from knees to shoulders'], progression:'Increase range gradually.', alternatives:['Supported Reverse Nordic'], equivalents:['Leg Extension'], equipment:['Knee pad'], difficulty:'Intermediate', tags:['quadriceps','legs','joint-health'] },
  { id:'cossack-squats', name:'Cossack Squats', section:'Calisthenics', category:'Legs', description:'Side-to-side squat combining strength and hip range.', cues:['Keep the planted heel down','Move within controlled range'], progression:'Supported → bodyweight → loaded.', alternatives:['Lateral Lunge'], equivalents:['Lateral Lunge'], equipment:['Bodyweight'], difficulty:'Intermediate', tags:['legs','hips','mobility'] },
  { id:'single-calf', name:'Single-Leg Calf Raises', section:'Calisthenics', category:'Legs', description:'Unilateral calf strength through full ankle range.', cues:['Pause at top and bottom','Avoid rolling the ankle'], progression:'Add range, pauses, then load.', alternatives:['Two-Leg Calf Raise'], equivalents:['Calf Raise'], equipment:['Step optional'], difficulty:'Beginner', tags:['calves','legs','ankles'] },
  { id:'dead-hangs', name:'Dead Hangs', section:'Calisthenics', category:'Accessories', description:'Relaxed hanging for grip and overhead tolerance.', cues:['Use a comfortable grip','Stop if the shoulder position is painful'], progression:'Longer controlled holds or towel hangs.', alternatives:['Feet-Assisted Hang'], equivalents:['Loaded Carry'], equipment:['Pull-up bar'], difficulty:'Beginner', tags:['grip','shoulders','joint-health'] },
  { id:'scap-pushups', name:'Scapular Push-Ups', section:'Calisthenics', category:'Accessories', description:'Straight-arm scapular protraction and retraction.', cues:['Keep elbows locked','Let only the shoulder blades move'], progression:'Quadruped → plank → feet elevated.', alternatives:['Quadruped Scapular Push-Up'], equivalents:['Serratus Cable Press'], equipment:['Floor'], difficulty:'Beginner', tags:['scapula','shoulders','joint-health'] },
  { id:'tibialis-raises', name:'Tibialis Raises', section:'Calisthenics', category:'Accessories', description:'Anterior shin strengthening.', cues:['Keep heels down','Lift toes through controlled range'], progression:'Move feet farther from wall or add resistance.', alternatives:['Seated Toe Raise'], equivalents:['Tibialis Machine Raise'], equipment:['Wall optional'], difficulty:'Beginner', tags:['ankles','lower-leg','joint-health'] },
  { id:'copenhagen', name:'Copenhagen Planks', section:'Calisthenics', category:'Accessories', description:'Side plank emphasizing adductors and lateral core.', cues:['Keep hips stacked','Use a shorter lever first'], progression:'Knee-supported → ankle-supported → add movement.', alternatives:['Side Plank'], equivalents:['Adductor Machine'], equipment:['Bench'], difficulty:'Intermediate', tags:['adductors','core','joint-health'] }
];

// Conservative working prescriptions; choose the regression that keeps the target RIR and clean technique.
const calisthenicsPrescriptions = {
  'ring-pushups': { setsReps:'3–4 sets × 6–15 reps', rest:'90–150 seconds', intensity:'1–3 RIR' },
  'ring-dips': { setsReps:'3 sets × 5–10 reps', rest:'2–3 minutes', intensity:'1–3 RIR; stop if ring stability or shoulder comfort deteriorates' },
  'archer-pushups': { setsReps:'3 sets × 4–8 reps per side', rest:'2 minutes', intensity:'1–3 RIR on the weaker side' },
  pppu: { setsReps:'3–4 sets × 5–10 reps', rest:'2–3 minutes', intensity:'2–3 RIR; end the set when lean or protraction is lost' },
  'pike-pushups': { setsReps:'3–4 sets × 6–12 reps', rest:'2–3 minutes', intensity:'1–3 RIR' },
  'ring-flys': { setsReps:'2–3 sets × 8–15 reps', rest:'90–120 seconds', intensity:'2–3 RIR; stop before shoulder position or elbow angle changes' },
  'ring-triceps': { setsReps:'2–4 sets × 8–15 reps', rest:'60–120 seconds', intensity:'1–3 RIR' },
  pullups: { setsReps:'3–4 sets × 4–10 reps', rest:'2–3 minutes', intensity:'1–3 RIR; stop when full range is lost' },
  'weighted-pullups': { setsReps:'3–5 sets × 3–6 reps', rest:'3–4 minutes', intensity:'2–3 RIR; no grinding or kipping' },
  'ring-rows': { setsReps:'3–4 sets × 8–15 reps', rest:'90–150 seconds', intensity:'1–3 RIR' },
  'scap-pullups': { setsReps:'2–3 sets × 6–12 controlled reps', rest:'60–90 seconds', intensity:'Stop when elbow bend or momentum appears' },
  'front-lever-rows': { setsReps:'3–5 sets × 3–8 reps in the appropriate lever', rest:'2–3 minutes', intensity:'Stop with 1–2 technically clean reps in reserve' },
  'muscleup-drills': { setsReps:'3–5 sets × 1–5 high-quality reps', rest:'2–4 minutes', intensity:'Stop when pull height or transition speed drops' },
  'pistol-squats': { setsReps:'3–4 sets × 3–8 reps per side', rest:'2–3 minutes', intensity:'1–3 RIR; stop before balance or knee tracking deteriorates' },
  'bulgarian-split': { setsReps:'3–4 sets × 6–15 reps per side', rest:'90–180 seconds', intensity:'1–3 RIR' },
  stepups: { setsReps:'3 sets × 8–15 reps per side', rest:'90–150 seconds', intensity:'1–3 RIR' },
  'nordic-curls': { setsReps:'2–4 sets × 3–8 controlled reps', rest:'2–3 minutes', intensity:'Stop before the eccentric can no longer be controlled' },
  'reverse-nordic': { setsReps:'2–3 sets × 6–12 reps', rest:'90–120 seconds', intensity:'2–3 RIR; use only a pain-free range' },
  'cossack-squats': { setsReps:'2–3 sets × 5–10 reps per side', rest:'60–120 seconds', intensity:'Keep 2–3 controlled reps in reserve' },
  'single-calf': { setsReps:'3–4 sets × 10–20 reps per side', rest:'60–90 seconds', intensity:'1–3 RIR' },
  'dead-hangs': { setsReps:'2–4 holds × 20–45 seconds', rest:'60–90 seconds', intensity:'Stop before grip failure or shoulder discomfort' },
  'scap-pushups': { setsReps:'2–3 sets × 8–15 reps', rest:'60–90 seconds', intensity:'Stop when elbows bend or trunk position changes' },
  'tibialis-raises': { setsReps:'2–4 sets × 12–25 reps', rest:'60–90 seconds', intensity:'1–3 RIR' },
  copenhagen: { setsReps:'2–3 holds × 15–30 seconds per side', rest:'60–90 seconds', intensity:'Stop before the hips drop or adductor discomfort becomes sharp' }
};
calisthenicsExercises.forEach(exercise => Object.assign(exercise, calisthenicsPrescriptions[exercise.id]));

const skills = [
  { id:'handstand', name:'Handstand', description:'Build a stable, aligned inverted support before chasing balance duration.', prerequisites:['Comfortable overhead shoulder position','Pain-free wrist extension','Confident wall exit'], progression:['Wall Hold — 3 × 20–40 seconds; rest 60–90 seconds','Chest-to-Wall Hold — 3–5 × 20–45 seconds; rest 60–90 seconds','Heel Pulls — 3–5 × 3–5 controlled balance attempts; rest 60–90 seconds','Kick-Up Practice — 8–15 single attempts; rest 20–40 seconds','Freestanding Hold — 6–12 quality attempts; rest 30–60 seconds'], mobilityRequirements:['Overhead shoulder flexion','Wrist extension','Thoracic extension'], strengthRequirements:['Straight-arm support','Scapular elevation','Hollow-body control'], commonMistakes:['Excessive lower-back arch','Looking too far forward','Practicing balance before learning a safe exit'], frequency:'2–4 short practices per week; stop when kick-up accuracy, line, or safe exits noticeably deteriorate.', placement:'Before Chest or Shoulders, while fresh.', equipment:['Wall','Open floor'], supportingExercises:['Wall Slides','Scapular Push-Ups','Hollow Body Hold'] },
  { id:'hspu', name:'Handstand Push-Up', description:'A vertical bodyweight press built on handstand control and overhead strength.', prerequisites:['Stable wall handstand','Strong pike push-ups','Pain-free overhead pressing'], progression:['Pike Push-Up — 3–4 × 6–12 reps; rest 2 minutes','Elevated Pike Push-Up — 3–4 × 5–10 reps; rest 2–3 minutes','Wall Negative — 3–5 × 1–3 reps with a 3–5-second descent; rest 2–3 minutes','Partial-ROM Wall HSPU — 3–5 × 3–6 reps; rest 2–3 minutes','Full Wall HSPU — 3–5 × 2–6 reps; rest 3 minutes','Freestanding HSPU — 4–8 sets × 1–3 quality reps; rest 3–4 minutes'], mobilityRequirements:['Shoulder flexion','Wrist extension','Thoracic extension'], strengthRequirements:['Overhead pressing strength','Inverted scapular control','Trunk stiffness'], commonMistakes:['Elbows flaring excessively','Losing a stable hand-head tripod','Adding depth before control'], frequency:'1–3 focused sessions per week; finish with 1–2 clean reps in reserve and stop when line, depth, or head control breaks down.', placement:'Before Chest or Shoulders.', equipment:['Wall','Box optional','Parallettes optional'], supportingExercises:['Overhead Press','Pike Push-Ups','Wall Handstand'] },
  { id:'planche', name:'Planche', description:'A straight-arm horizontal push skill requiring progressive lean, protraction, and full-body tension.', prerequisites:['Strong plank and support hold','Prepared wrists','Controlled scapular protraction'], progression:['Frog Stand — 3–5 × 10–20 seconds; rest 60–90 seconds','Planche Lean — 4–5 × 10–20 seconds; rest 90–120 seconds','Pseudo Planche Push-Up — 3–4 × 5–10 reps; rest 2–3 minutes','Tuck Planche — 4–6 × 6–12 seconds; rest 2–3 minutes','Advanced Tuck — 4–6 × 5–10 seconds; rest 2–3 minutes','Straddle Planche — 4–6 × 3–8 seconds; rest 3 minutes','Full Planche — 4–6 × 3–8 seconds; rest 3–4 minutes'], mobilityRequirements:['Wrist extension','Shoulder extension tolerance'], strengthRequirements:['Straight-arm pushing strength','Scapular protraction','Compression and hollow-body control'], commonMistakes:['Bent elbows','Retracted shoulder blades','Advancing leverage too early'], frequency:'2–4 short exposures per week; stop when elbows bend, protraction is lost, or hold time falls by roughly one-third.', placement:'Before Chest or Shoulders.', equipment:['Floor or parallettes'], supportingExercises:['Pseudo Planche Push-Ups','Scapular Push-Ups','Hollow Body Hold'] },
  { id:'front-lever', name:'Front Lever', description:'A straight-arm horizontal pulling skill using lat strength and posterior pelvic tilt.', prerequisites:['Controlled pull-ups','Active hang','Strong hollow-body position'], progression:['Scapular Pull-Up — 3 × 6–12 reps; rest 60–90 seconds','Tuck Front Lever — 4–6 × 8–15 seconds; rest 2 minutes','Advanced Tuck — 4–6 × 6–12 seconds; rest 2–3 minutes','One-Leg Front Lever — 4–6 × 5–10 seconds per side; rest 2–3 minutes','Straddle Front Lever — 4–6 × 3–8 seconds; rest 3 minutes','Full Front Lever — 4–6 × 3–8 seconds; rest 3–4 minutes'], mobilityRequirements:['Comfortable overhead hang','Thoracic control'], strengthRequirements:['Straight-arm lat strength','Scapular depression','Anti-extension core strength'], commonMistakes:['Piking at the hips','Bent elbows','Losing scapular position'], frequency:'2–3 focused sessions per week; stop when the hips drop, elbows bend, or the intended lever can no longer be held cleanly.', placement:'Before Back.', equipment:['Pull-up bar or rings'], supportingExercises:['Scapular Pull-Ups','Front Lever Rows','Pull-Ups'] },
  { id:'back-lever', name:'Back Lever', description:'A straight-arm lever developed through skin-the-cat control and gradual shoulder loading.', prerequisites:['Comfortable German-hang position','Controlled Skin the Cat','Prepared elbows and shoulders'], progression:['Skin the Cat — 3 × 2–5 slow reps; rest 90–120 seconds','Tuck Back Lever — 4–5 × 8–15 seconds; rest 2 minutes','Advanced Tuck — 4–5 × 6–12 seconds; rest 2–3 minutes','One-Leg Back Lever — 4–5 × 5–10 seconds per side; rest 2–3 minutes','Straddle Back Lever — 4–6 × 3–8 seconds; rest 3 minutes','Full Back Lever — 4–6 × 3–8 seconds; rest 3–4 minutes'], mobilityRequirements:['Shoulder extension','Elbow and biceps tolerance'], strengthRequirements:['Straight-arm shoulder strength','Posterior-chain tension','Scapular control'], commonMistakes:['Rushing shoulder extension','Bent elbows','Dropping the hips'], frequency:'1–3 controlled sessions per week; stop immediately for anterior-shoulder, elbow, or biceps pain, or when straight-arm control is lost.', placement:'Before Back.', equipment:['Rings preferred or bar'], supportingExercises:['Skin the Cat','German Hang','Ring Rows'] },
  { id:'muscle-up', name:'Muscle-Up', description:'An explosive pull, close transition, and strong dip combined into one movement.', prerequisites:['Strict pull-ups','Chest-to-bar pulling ability','Stable straight-bar or ring dip'], progression:['Explosive Pull-Up — 4–6 × 2–4 reps; rest 2–3 minutes','Chest-to-Bar Pull-Up — 4–5 × 3–5 reps; rest 2–3 minutes','Transition Drill — 4–6 × 2–5 slow reps; rest 90–120 seconds','Band-Assisted Muscle-Up — 4–6 × 1–4 reps; rest 2–3 minutes','Negative Muscle-Up — 3–5 × 1–3 reps with a 3–5-second transition; rest 3 minutes','Strict Muscle-Up — 4–8 × 1–3 reps; rest 3–4 minutes'], mobilityRequirements:['Comfortable deep dip','Wrist tolerance for the transition'], strengthRequirements:['High pulling strength','Dip strength','Fast transition control'], commonMistakes:['Pulling too low','Transitioning far from the bar','Overusing a large uncontrolled kip'], frequency:'1–3 technique sessions per week; stop when pull height or transition speed drops—do not grind failed transitions.', placement:'Before Back.', equipment:['Pull-up bar or rings','Resistance band optional'], supportingExercises:['Weighted Pull-Ups','Muscle-Up Drills','Ring Dips'] },
  { id:'l-sit', name:'L-Sit', description:'A support and compression skill linking straight-arm strength with hip flexion and core control.', prerequisites:['Stable support hold','Comfortable seated pike','Basic trunk control'], progression:['Support Hold — 3–5 × 15–30 seconds; rest 60–90 seconds','Tuck Sit — 4–5 × 8–20 seconds; rest 60–90 seconds','One-Leg L-Sit — 4–5 × 6–15 seconds per side; rest 60–90 seconds','Full L-Sit — 4–6 × 5–15 seconds; rest 90–120 seconds'], mobilityRequirements:['Hamstring length','Wrist extension or neutral grip on parallettes'], strengthRequirements:['Scapular depression','Hip-flexor compression','Locked-knee quadriceps strength'], commonMistakes:['Shrugging shoulders','Bent knees','Holding the breath excessively'], frequency:'2–4 short practices per week; stop when the shoulders remain shrugged, elbows bend, or the legs can no longer hold the chosen position.', placement:'With core work.', equipment:['Parallettes, dip bars, or floor'], supportingExercises:['Core Routine','Seated Leg Lifts','Support Hold'] },
  { id:'one-arm-pushup', name:'One-Arm Push-Up', description:'A unilateral press demanding pressing strength and anti-rotation control.', prerequisites:['Strong strict push-ups','Controlled archer push-ups','Stable wide-foot plank'], progression:['Incline One-Arm Push-Up — 3–4 × 5–10 reps per side; rest 2 minutes','Uneven Push-Up — 3–4 × 6–12 reps per side; rest 2 minutes','Archer Push-Up — 3–4 × 4–8 reps per side; rest 2–3 minutes','Assisted One-Arm Push-Up — 3–5 × 3–6 reps per side; rest 2–3 minutes','Negative — 3–5 × 1–3 reps per side with a 3–5-second descent; rest 2–3 minutes','Full One-Arm Push-Up — 4–6 × 1–5 reps per side; rest 3 minutes'], mobilityRequirements:['Wrist extension','Shoulder horizontal range'], strengthRequirements:['Unilateral pressing strength','Anti-rotation core strength'], commonMistakes:['Twisting open excessively','Narrowing the foot position too soon','Dropping into the bottom'], frequency:'1–3 focused sessions per week; keep 1–2 clean reps in reserve and stop when trunk rotation or shoulder position can no longer be controlled.', placement:'Before Chest or a calisthenics Push session.', equipment:['Floor','Raised surface optional'], supportingExercises:['Archer Push-Ups','Ring Push-Ups','Side Plank'] },
  { id:'pistol-squat', name:'Pistol Squat', description:'A deep single-leg squat combining balance, mobility, and unilateral leg strength.', prerequisites:['Comfortable deep squat','Controlled step-down','Pain-free knee-over-toe range'], progression:['Box Squat — 3–4 × 6–10 reps per side; rest 90–150 seconds','Assisted Pistol — 3–4 × 5–8 reps per side; rest 2 minutes','Eccentric Pistol — 3–5 × 2–5 reps per side with a 3–5-second descent; rest 2 minutes','Counterbalance Pistol — 3–4 × 3–8 reps per side; rest 2–3 minutes','Full Pistol Squat — 3–5 × 3–8 reps per side; rest 2–3 minutes'], mobilityRequirements:['Ankle dorsiflexion','Hip flexion','Hamstring mobility'], strengthRequirements:['Single-leg squat strength','Foot and hip stability','Compression strength'], commonMistakes:['Heel lifting','Knee collapsing inward','Dropping without control'], frequency:'1–3 practices per week; stop when balance, heel contact, or knee tracking cannot be maintained without pain.', placement:'Before Legs.', equipment:['Box','Support or counterweight optional'], supportingExercises:['Bulgarian Split Squats','Step-Ups','Knee-over-Toe Mobilization'] }
];

const trainingPrinciples = [
  '[Current recommendation] Continue the Gym cycle in order: Chest → Back → Shoulders & Arms → Legs. Insert rest days according to recovery and schedule; do not restart the cycle because a new week begins.',
  '[Current recommendation] Use loads and rep ranges that match the goal. Heavier work can support maximal strength, but every session does not need to use 80% of 1RM.',
  '[Current recommendation] Most working sets should finish with roughly 1–3 repetitions in reserve. Training to failure is optional, not required, and is best limited when technique or safety may deteriorate.',
  '[Current recommendation] Use a controlled, pain-free range of motion. A consistent range and stable technique matter more than arbitrary depth rules.',
  '[Current recommendation] Perform specific warm-up and ramp-up sets before demanding lifts; warm-ups should prepare the movement without creating unnecessary fatigue.',
  '[Current recommendation] Progress when the planned sets reach the top of their rep range with the target RIR and repeatable technique. Increase load by the smallest practical amount.',
  '[Current recommendation] Progress is evaluated across multiple sessions, not demanded in every workout. An extra rep, a small load increase, better control, or the same work at a lower effort can all show progress.',
  '[Current recommendation] Rest long enough to repeat the intended performance: commonly 2–4 minutes for demanding compound work and 60–120 seconds for smaller isolation work.',
  '[Current recommendation] Supersets are optional and useful for saving time. Pair exercises that do not meaningfully compromise the performance or safety of the priority movement.',
  '[Current recommendation] Drop sets and slow eccentrics are optional intensity techniques. Use them selectively after normal work; they are not required for progress.',
  '[Current recommendation] Base nutrition on adequate total energy, protein, carbohydrate, fluids, and a varied diet. BCAAs or EAAs during training are not necessary when daily protein intake and meal timing are already adequate.',
  '[Historical note — not a standing rule] “Maximal-strength work every 2–3 weeks.” Heavy singles or low-rep work should only be used when it serves a defined strength goal and can be performed safely; no fixed 2–3-week test is required.',
  '[Historical note — rejected as too absolute] “Otherwise always use 80% of maximum.” Relative load should vary by exercise, goal, rep target, readiness, and training phase.',
  '[Historical note — optional method, not a formula] “Drop set: half the maximum weight for twice the repetitions.” There is no universal 50%-load/double-rep rule; reduce load enough to continue controlled repetitions if a drop set is intentionally programmed.',
  '[Historical note — rejected as too absolute] “No supersets.” Supersets can be effective; avoid them only when fatigue interferes with a priority lift, technique, or recovery.',
  '[Historical note — supplement claim not retained] “EAAs during training if possible.” This is not a default requirement when sufficient high-quality protein is consumed across the day.',
  '[Historical templates — require a specific goal] Blocks such as 3–5 exercises × 3–5 sets × 3–5 reps or 6 exercises × 3 sets × 8–12 reps can be valid examples, but should not be applied automatically for 8–12 weeks.',
  '[Historical note — partly retained] “Pyramid from light to heavy” is useful as a ramp-up strategy before heavy work, but warm-up sets should not be counted as hard working sets or create avoidable fatigue.',
  '[Historical note — context-dependent] “Warm up with 10–20 unweighted reps.” Use this only when it prepares the specific movement; some lifts need several progressively loaded ramp-up sets instead.',
  '[Historical note — no universal rule] “Begin with more sets” and example descending reps of 10, 8, and 4 require a defined purpose. Set count and rep changes should match the exercise and training goal.',
  '[Historical note — optional method] Emphasizing a slow lowering phase can improve control, but every repetition already needs a controlled eccentric; exaggerated negatives add fatigue and should be programmed deliberately.',
  '[Historical saying — motivation only] “Train hard, heavy, and properly.” Hard work still needs appropriate technique, fatigue management, and recovery.',
  '[Historical saying — not training guidance] “Wer regelkonform trainiert, sieht halt auch regelkonform aus.” Retained only as an original quote.',
  '[Historical saying — not training guidance] “If you kick a horse and it is not a racehorse, it will not run faster.” Retained only as an original quote.',
  '[Historical saying — rejected nutrition claim] “Nur Fleisch macht Fleisch” (“Only meat builds meat”). Muscle gain does not require meat; adequate protein and energy can come from omnivorous, vegetarian, or vegan diets.'
];

const dailyMobility = {
  'Daily base — approximately 8–10 minutes':[
    'Cat-Cow — 6–8 slow repetitions (spine)',
    'Open-Book Thoracic Rotation — 5 repetitions per side (thoracic mobility)',
    'Wall Slides — 8–10 controlled repetitions (shoulder flexion)',
    'Supported Shoulder Extension Hold — 20–30 seconds (shoulder extension)',
    'Wrist sequence: circles, palm rocks, and gentle back-of-hand rocks — 30–45 seconds each',
    '90/90 Hip Switch — 6–8 repetitions per side (hips)',
    'Deep Lunge — 20–30 seconds per side (hips)',
    'Pike Stretch or Seated Forward Fold — 30–45 seconds (hamstrings)',
    'Knee-over-Toe Mobilization — 8–10 controlled repetitions per side (ankles)'
  ],
  'Optional add-ons — choose 1–3 for a 10–15-minute total':[
    'Child’s Pose — 30–45 seconds',
    'Cobra or Upward Dog — 5–8 gentle repetitions or a 20-second hold',
    'Shoulder CARs — 3 slow circles per direction',
    'Band or Broomstick Pass-Throughs — 8–12 controlled repetitions',
    'Additional Shoulder Flexion Drill — 30–45 seconds',
    'Finger Pulses — 10–15 repetitions',
    'World’s Greatest Stretch — 3–5 repetitions per side',
    'Light Jefferson Curl — 1–2 sets × 5–8 slow reps; optional and unloaded or very lightly loaded',
    'Deep Squat Hold — 30–60 seconds with support if needed'
  ]
};

const morningFocus = [
  { name:'Planche / Wrist Skill Morning', note:'Rotate with the other morning focus options; keep this technical rather than fatiguing.', items:['Wrist preparation — 3–5 minutes','Frog Stand — 3 × 10–20 seconds; rest 60 seconds','Planche Lean — 3–4 × 10–20 seconds; rest 60–90 seconds','Pseudo Planche Hold or Push-Up — 2–3 sets; stop with 2–3 clean reps or several seconds in reserve','Scapular Push-Ups — 2 × 8–12 controlled reps'] },
  { name:'Core / L-Sit Morning', note:'Rotate with the other morning focus options; stop before trunk or support position breaks down.', items:['Existing 8-minute ab workout','Current L-Sit progression — 3–5 quality sets','Optional Hollow Body Hold — 2–3 × 20–30 seconds','Optional Side Plank — 2 × 20–40 seconds per side'], link:'https://www.youtube.com/watch?v=9oAbP7LHT9Q' },
  { name:'Easy Run Morning', note:'20–40 minutes at a conversational pace; shorten the run when recovery is poor.', items:['Brief warm-up — 3–5 minutes of brisk walking or easy jogging plus a few ankle and leg movements','Easy, relaxed run — breathing remains conversational','Finish feeling able to continue; stop for pain, dizziness, chest symptoms, or unusual shortness of breath'] }
];

const warmups = {
  'Chest':['Shoulder CARs','Band Pull-Aparts','Scapular Push-Ups','Light ramp-up sets'],
  'Back':['Dead Hang','Scapular Pull-Ups','Band Straight-Arm Pulldowns','Light ramp-up sets'],
  'Shoulders & Arms':['Wrist Circles','Shoulder CARs','Wall Slides','Band External Rotations','Light ramp-up sets'],
  'Legs':['Knee-over-Toe Mobilization','90/90 Hip Switch','Deep Squat Hold','Bodyweight Squats','Light ramp-up sets'],
  'Calisthenics Push':['Wrist preparation','Scapular Push-Ups','Shoulder Pass-Throughs','Easy push-up progression'],
  'Calisthenics Pull':['Wrist and elbow circles','Dead Hang','Scapular Pull-Ups','Easy Ring Rows'],
  'Calisthenics Legs':['Ankle mobilization','Cossack Squats','Deep Lunge','Assisted squat pattern']
};

const recoveryMobility = [
  { name:'Upper-body reset', items:['Child’s Pose with side reach','Wall Slides','Gentle Shoulder Extension Drill','Easy Dead Hang'] },
  { name:'Lower-body reset', items:['90/90 Hip Switch','Deep Lunge','Pike Stretch','Knee-over-Toe Mobilization'] },
  { name:'Full-body downshift', items:['Cat-Cow','World’s Greatest Stretch','Deep Squat Hold','Relaxed breathing'] }
];

const jointHealth = [
  { category:'Shoulder and scapular health', items:['Face Pulls','External Rotations','Band Pull-Aparts','Cuban Press','Scapular Pull-Ups','Scapular Push-Ups','Dead Hangs'] },
  { category:'Grip and carries', items:['Farmer’s Walk','Suitcase Carry','Dead Hang','Towel Hang'] },
  { category:'Lower-body resilience', items:['Nordic Curl','Reverse Nordic Curl','Copenhagen Plank','Tibialis Raise','Cossack Squat','Calf Raise','Deep Squat Hold'] },
  { category:'Mobility and controlled range', items:['Jefferson Curl','90/90 Hip Switch','Wall Slide','Shoulder Pass-Through'] }
];

const mobilityLibrary = [
  ...Object.entries(dailyMobility).flatMap(([category, items]) => items.map((name, index) => ({ id:`mob-${category}-${index}`.toLowerCase().replace(/[^a-z0-9]+/g,'-'), name, section:'Mobility', category, description:'Controlled mobility drill. Use a comfortable, pain-free range.', cues:['Move slowly','Do not force end range'], equipment:name.includes('Band') ? ['Band or broomstick'] : ['None'], tags:['mobility', category.toLowerCase()] }))),
  { id:'farmer-walk', name:'Farmer’s Walk', section:'Accessories', category:'Grip and carries', description:'Bilateral loaded carry for grip and trunk strength.', cues:['Stand tall','Walk under control'], equipment:['Heavy dumbbells or implements'], tags:['grip','carry','joint-health'] },
  { id:'suitcase-carry', name:'Suitcase Carry', section:'Accessories', category:'Grip and carries', description:'Unilateral carry emphasizing anti-lateral-flexion strength.', cues:['Do not lean toward the load','Walk steadily'], equipment:['Dumbbell or kettlebell'], tags:['grip','core','carry'] },
  { id:'external-rotation', name:'External Rotations', section:'Accessories', category:'Shoulder and scapular health', description:'Light rotator-cuff external rotation.', cues:['Keep the shoulder quiet','Use controlled range'], equipment:['Band or cable'], tags:['shoulders','joint-health'] },
  { id:'band-pullapart', name:'Band Pull-Aparts', section:'Accessories', category:'Shoulder and scapular health', description:'Simple rear-shoulder and scapular-control drill.', cues:['Avoid shrugging','Control the return'], equipment:['Resistance band'], tags:['shoulders','scapula','joint-health'] },
  { id:'cuban-press', name:'Cuban Press', section:'Accessories', category:'Shoulder and scapular health', description:'Light compound shoulder rotation and press drill.', cues:['Use light resistance','Move with control'], equipment:['Light dumbbells or bar'], tags:['shoulders','joint-health'] },
  { id:'towel-hang', name:'Towel Hang', section:'Accessories', category:'Grip and carries', description:'Grip-intensive hanging variation.', cues:['Secure the towel','Keep the hang controlled'], equipment:['Pull-up bar','Towel'], tags:['grip','hang'] }
];

const gymCategories = ['General','Chest','Back','Shoulders & Arms','Legs','Accessories'];
const calisthenicsCategories = ['Push','Pull','Legs','Accessories'];
const mobilityCategories = ['Daily Morning Mobility','Rotating Morning Focus','Pre-Workout Warm-Ups','Optional Recovery Mobility','Mobility Library'];

const allExercises = [...gymExercises, ...calisthenicsExercises, ...mobilityLibrary];
const state = { gymCategory:'General', calisthenicsCategory:'Push', mobilityCategory:'Daily Morning Mobility', search:'', tag:'' };

const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const list = items => items?.length ? `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '';
const detail = (label, value, full = false) => {
  if (!value || (Array.isArray(value) && !value.length)) return '';
  const content = Array.isArray(value) ? list(value) : `<p>${escapeHtml(value)}</p>`;
  return `<div class="detail-block${full ? ' full' : ''}"><span class="detail-label">${escapeHtml(label)}</span>${content}</div>`;
};

function exerciseAccordion(exercise, parentId, index) {
  const uid = `${parentId}-${exercise.id}-${index}`;
  const meta = [exercise.difficulty && `<span class="meta-chip"><i class="bi bi-bar-chart"></i>${escapeHtml(exercise.difficulty)}</span>`, exercise.equipment?.length && `<span class="meta-chip"><i class="bi bi-tools"></i>${escapeHtml(exercise.equipment.join(', '))}</span>`].filter(Boolean).join('');
  return `<div class="accordion-item">
    <h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${uid}" aria-expanded="false" aria-controls="${uid}">
      <span class="exercise-title"><span>${escapeHtml(exercise.name)}</span><span class="source-badge">${escapeHtml(exercise.section)} · ${escapeHtml(exercise.category)}</span></span>
    </button></h2>
    <div id="${uid}" class="accordion-collapse collapse" data-bs-parent="#${parentId}"><div class="accordion-body">
      ${exercise.description ? `<p class="mb-3 text-body-secondary">${escapeHtml(exercise.description)}</p>` : ''}
      ${meta ? `<div class="meta-row mb-3">${meta}</div>` : ''}
      <div class="detail-grid">
        ${detail('Technique cues', exercise.cues, true)}${detail('Sets & reps', exercise.setsReps)}${detail('Rest', exercise.rest)}${detail('Intensity / RIR', exercise.intensity)}${detail('Progression', exercise.progression)}${detail('Alternatives / regressions', exercise.alternatives)}${detail(exercise.section === 'Calisthenics' ? 'Closest gym alternative / similar role' : 'Closest calisthenics alternative / similar role', exercise.equivalents)}
        ${exercise.link ? `<div class="detail-block"><span class="detail-label">Reference</span><a href="${exercise.link}" target="_blank" rel="noopener noreferrer">Open 8-minute ab workout <i class="bi bi-box-arrow-up-right"></i></a></div>` : ''}
      </div>
      ${exercise.tags?.length ? `<div class="tag-list">${exercise.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
    </div></div>
  </div>`;
}

function renderTabs(containerId, categories, active, handler) {
  const container = document.getElementById(containerId);
  container.innerHTML = categories.map(category => `<button class="category-tab${category === active ? ' active' : ''}" type="button" role="tab" aria-selected="${category === active}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join('');
  container.querySelectorAll('button').forEach(button => button.addEventListener('click', () => handler(button.dataset.category)));
}

function renderGym() {
  renderTabs('gymTabs', gymCategories, state.gymCategory, category => { state.gymCategory = category; renderGym(); });
  const content = document.getElementById('gymContent');
  if (state.gymCategory === 'General') {
    content.innerHTML = `<div class="routine-card"><p class="text-body-secondary">Current recommendations appear first. Historical notes are retained for context and explicitly marked where they are optional, unsupported, or rejected.</p><div class="row g-3">${trainingPrinciples.map(note => `<div class="col-md-6"><div class="principle-card">${escapeHtml(note)}</div></div>`).join('')}</div></div>`;
    return;
  }
  const items = gymExercises.filter(item => item.category === state.gymCategory);
  content.innerHTML = `<div class="accordion card-accordion" id="gymAccordion">${items.map((item, i) => exerciseAccordion(item, 'gymAccordion', i)).join('')}</div>`;
}

function renderCalisthenics() {
  renderTabs('calisthenicsTabs', calisthenicsCategories, state.calisthenicsCategory, category => { state.calisthenicsCategory = category; renderCalisthenics(); });
  const items = calisthenicsExercises.filter(item => item.category === state.calisthenicsCategory);
  document.getElementById('calisthenicsContent').innerHTML = `<div class="accordion card-accordion" id="calisthenicsAccordion">${items.map((item, i) => exerciseAccordion(item, 'calisthenicsAccordion', i)).join('')}</div>`;
}

function renderSkills() {
  document.getElementById('skillsContent').innerHTML = skills.map((skill, index) => {
    const uid = `skill-${skill.id}`;
    return `<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${uid}" aria-expanded="false" aria-controls="${uid}">${escapeHtml(skill.name)}</button></h2>
      <div id="${uid}" class="accordion-collapse collapse" data-bs-parent="#skillsContent"><div class="accordion-body">
        <p class="text-body-secondary mb-4">${escapeHtml(skill.description)}</p><div class="detail-grid">
        ${detail('Prerequisites',skill.prerequisites)}${detail('Progression ladder',skill.progression)}${detail('Mobility requirements',skill.mobilityRequirements)}${detail('Strength requirements',skill.strengthRequirements)}${detail('Common mistakes',skill.commonMistakes)}${detail('Suggested frequency',skill.frequency)}${detail('Training placement',skill.placement)}${detail('Required equipment',skill.equipment)}${detail('Supporting exercises',skill.supportingExercises,true)}
        </div></div></div></div>`;
  }).join('');
}

function routineCards(items) {
  return `<div class="focus-grid">${items.map(item => `<article class="focus-card"><h3>${escapeHtml(item.name)}</h3>${item.note ? `<p>${escapeHtml(item.note)}</p>` : ''}${list(item.items)}${item.link ? `<a class="btn btn-sm btn-outline-secondary mt-3" href="${item.link}" target="_blank" rel="noopener noreferrer">Open ab workout <i class="bi bi-box-arrow-up-right"></i></a>` : ''}</article>`).join('')}</div>`;
}

function renderMobility() {
  renderTabs('mobilityTabs', mobilityCategories, state.mobilityCategory, category => { state.mobilityCategory = category; renderMobility(); });
  const content = document.getElementById('mobilityContent');
  if (state.mobilityCategory === 'Daily Morning Mobility') {
    content.innerHTML = `<div class="routine-card"><div class="d-flex flex-wrap justify-content-between gap-2 mb-3"><div><h2 class="h5 mb-1">Daily foundation</h2><p class="text-body-secondary mb-0">Complete the nine base drills, then choose optional add-ons only when time and recovery allow.</p></div><span class="meta-chip"><i class="bi bi-clock"></i>Approximately 10–15 minutes</span></div>${Object.entries(dailyMobility).map(([group, items]) => `<h3 class="mobility-group-title">${escapeHtml(group)}</h3><ul class="routine-list">${items.map(item => `<li><i class="bi bi-arrow-right-short"></i><span>${escapeHtml(item)}</span></li>`).join('')}</ul>`).join('')}</div>`;
  } else if (state.mobilityCategory === 'Rotating Morning Focus') {
    content.innerHTML = `<div class="alert alert-secondary border-0">Choose one focus and rotate to the next over time. These are not assigned to fixed weekdays.</div>${routineCards(morningFocus)}`;
  } else if (state.mobilityCategory === 'Pre-Workout Warm-Ups') {
    content.innerHTML = `<div class="warmup-grid">${Object.entries(warmups).map(([name, items]) => `<article class="warmup-card"><h3>${escapeHtml(name)}</h3>${list(items)}</article>`).join('')}</div>`;
  } else if (state.mobilityCategory === 'Optional Recovery Mobility') {
    content.innerHTML = `<p class="text-body-secondary">Optional easy movement for recovery days or after training. Keep intensity low.</p>${routineCards(recoveryMobility)}`;
  } else {
    content.innerHTML = `<div class="accordion card-accordion" id="mobilityAccordion">${mobilityLibrary.filter(item => item.section === 'Mobility').map((item, i) => exerciseAccordion(item, 'mobilityAccordion', i)).join('')}</div>`;
  }
}

function renderWeekly() {
  const sequence = items => `<div class="weekly-sequence">${items.map((item, index) => `${index ? '<i class="bi bi-arrow-right sequence-arrow" aria-hidden="true"></i>' : ''}<span class="sequence-step">${escapeHtml(item)}</span>`).join('')}</div>`;
  document.getElementById('weeklyContent').innerHTML = `
    <div class="weekly-grid mb-4">
      <article class="weekly-card"><p class="eyebrow">Primary cycle</p><h3>Gym</h3><p>Continue in order. Insert rest days according to recovery and schedule; never reset the cycle because of the weekday.</p>${sequence(['Chest','Back','Shoulders & Arms','Legs'])}</article>
      <article class="weekly-card"><p class="eyebrow">Alternative cycle</p><h3>Calisthenics</h3>${sequence(['Push','Pull','Legs'])}</article>
      <article class="weekly-card"><p class="eyebrow">Rotate freely</p><h3>Morning focus</h3>${list(['Planche / Wrist Skill','Core / L-Sit','Easy Run'])}</article>
    </div>
    <div class="weekly-grid">
      <article class="weekly-card"><h3>Skill placement</h3>${list(['Planche and Handstand-related work before Chest or Shoulders','Front Lever, Back Lever, and Muscle-Up before Back','L-Sit with core work','Pistol Squat before Legs'])}</article>
      <article class="weekly-card"><h3>Upper-body accessories</h3>${list(['Face Pulls and External Rotations after Chest or Shoulders','Scapular Pull-Ups and Dead Hangs on Back','Farmer’s Walk or Suitcase Carry after Back or Legs'])}</article>
      <article class="weekly-card"><h3>Lower-body accessories</h3>${list(['Tibialis Raises and Calf Raises on Legs','Copenhagen Plank on Legs or Core','Use mobility according to the session warm-up'])}</article>
    </div>`;
}

function renderOverview() {
  const cards = [
    { section:'gym', icon:'bi-building', title:'Gym plan', text:'The original General, Chest, Back, Shoulders & Arms, Legs, and Accessories split.' },
    { section:'calisthenics', icon:'bi-person-arms-up', title:'Calisthenics', text:'Push, pull, legs, and accessory movements with scalable alternatives.' },
    { section:'skills', icon:'bi-signpost-split', title:'Skill progressions', text:'Nine structured ladders with prerequisites, requirements, and placement.' },
    { section:'mobility', icon:'bi-universal-access', title:'Mobility', text:'Daily routine, rotating focus, warm-ups, and a movement library.' },
    { section:'weekly', icon:'bi-layout-text-sidebar-reverse', title:'Weekly framework', text:'Compact training cycles and placement guidance without a calendar.' },
    { section:'library', icon:'bi-search', title:'Exercise library', text:'Search all movements and filter them by useful tags.' }
  ];
  document.getElementById('overviewCards').innerHTML = cards.map(card => `<article class="overview-card"><div class="card-icon"><i class="bi ${card.icon}"></i></div><h3>${card.title}</h3><p>${card.text}</p><button class="btn btn-sm btn-link px-0 text-decoration-none" data-open-section="${card.section}">Open section <i class="bi bi-arrow-right"></i></button></article>`).join('');
  document.getElementById('principlesList').innerHTML = trainingPrinciples.slice(0, 8).map(note => `<div class="col-md-6 col-lg-3"><div class="principle-card">${escapeHtml(note)}</div></div>`).join('');
  document.getElementById('exerciseCount').textContent = gymExercises.length + calisthenicsExercises.length;
  document.getElementById('skillCount').textContent = skills.length;
}

function renderJointHealthSummary() {
  return jointHealth.map(group => `<article class="weekly-card"><h3>${escapeHtml(group.category)}</h3>${list(group.items)}</article>`).join('');
}

function renderLibrary() {
  const query = state.search.trim().toLowerCase();
  const filtered = allExercises.filter(exercise => {
    const haystack = [exercise.name,exercise.section,exercise.category,exercise.description,...(exercise.cues || []),...(exercise.equipment || []),...(exercise.tags || []),...(exercise.equivalents || []),...(exercise.alternatives || [])].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (!state.tag || exercise.tags?.includes(state.tag));
  });
  const groups = [...new Set(filtered.map(item => item.section))];
  const content = document.getElementById('libraryContent');
  content.innerHTML = groups.map((group, groupIndex) => {
    const parentId = `library-${group.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${groupIndex}`;
    const items = filtered.filter(item => item.section === group);
    return `<section class="library-group"><h2>${escapeHtml(group)}</h2><div class="accordion card-accordion" id="${parentId}">${items.map((item, i) => exerciseAccordion(item, parentId, i)).join('')}</div></section>`;
  }).join('');
  document.getElementById('resultsCount').textContent = `${filtered.length} ${filtered.length === 1 ? 'exercise' : 'exercises'} shown`;
  document.getElementById('emptyState').classList.toggle('d-none', filtered.length !== 0);
  document.getElementById('jointHealthPanel').classList.toggle('d-none', Boolean(query || state.tag));
  document.getElementById('clearFilters').classList.toggle('visible', Boolean(query || state.tag));
}

function setupFilters() {
  const preferredTags = ['chest','back','shoulders','arms','legs','core','push','pull','rings','skill','mobility','joint-health','grip'];
  const available = new Set(allExercises.flatMap(item => item.tags || []));
  const tags = preferredTags.filter(tag => available.has(tag));
  const container = document.getElementById('tagFilters');
  container.innerHTML = tags.map(tag => `<button class="filter-tag" type="button" data-tag="${tag}" aria-pressed="false">${tag}</button>`).join('');
  container.addEventListener('click', event => {
    const button = event.target.closest('[data-tag]');
    if (!button) return;
    state.tag = state.tag === button.dataset.tag ? '' : button.dataset.tag;
    container.querySelectorAll('[data-tag]').forEach(item => { const active = item.dataset.tag === state.tag; item.classList.toggle('active', active); item.setAttribute('aria-pressed', active); });
    renderLibrary();
  });
  document.getElementById('librarySearch').addEventListener('input', event => { state.search = event.target.value; renderLibrary(); });
  document.getElementById('clearFilters').addEventListener('click', () => {
    state.search = ''; state.tag = '';
    document.getElementById('librarySearch').value = '';
    container.querySelectorAll('[data-tag]').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed','false'); });
    renderLibrary();
  });
}

function openSection(section, updateHash = true) {
  const target = document.querySelector(`[data-section="${section}"]`) || document.querySelector('[data-section="overview"]');
  document.querySelectorAll('.view').forEach(view => view.classList.toggle('active', view === target));
  document.querySelectorAll('[data-section-link]').forEach(link => link.classList.toggle('active', link.dataset.sectionLink === target.dataset.section));
  if (updateHash) history.replaceState(null, '', `#${target.id}`);
  window.scrollTo({ top:0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  target.focus({ preventScroll:true });
  const collapseElement = document.getElementById('mainNav');
  if (collapseElement.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(collapseElement).hide();
}

function setupNavigation() {
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-section-link], [data-open-section]');
    if (!trigger) return;
    event.preventDefault();
    openSection(trigger.dataset.sectionLink || trigger.dataset.openSection);
  });
  window.addEventListener('hashchange', () => openSection(location.hash.slice(1) || 'overview', false));
}

function setupTheme() {
  const button = document.getElementById('themeToggle');
  const sync = () => {
    const dark = document.documentElement.dataset.bsTheme === 'dark';
    button.innerHTML = `<i class="bi ${dark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}" aria-hidden="true"></i>`;
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    button.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
  };
  sync();
  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.bsTheme = next;
    try { localStorage.setItem('training-theme', next); } catch (error) { /* Keep the in-session theme if storage is disabled. */ }
    sync();
  });
}

function init() {
  renderOverview(); renderGym(); renderCalisthenics(); renderSkills(); renderMobility(); renderWeekly(); setupFilters(); renderLibrary();
  document.getElementById('jointHealthContent').innerHTML = renderJointHealthSummary();
  setupNavigation(); setupTheme();
  openSection(location.hash.slice(1) || 'overview', false);
}

init();
