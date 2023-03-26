import { XCar, YCar } from "../drawing/Car";
import {
  RoadBlockX,
  RoadBlockY,
  CautionBlockX,
  CautionBlockY,
} from "../drawing/RoadBlock";

const entityManager = (ctx: CanvasRenderingContext2D) => {
  let activeCars: XCar[] & YCar[] = [];
  //Caution and roadblock spawns
  const xLight = new RoadBlockX(ctx);
  xLight.hide();
  const xCaution = new CautionBlockX(ctx);
  xCaution.hide();
  const yCaution = new CautionBlockY(ctx);
  const yLight = new RoadBlockY(ctx);
  //Caution and roadblock bools;
  let xIsGreen: boolean = true;
  let xIsCaution: boolean = false;
  let yIsCaution: boolean = false;

  //Initial roadblock behavior
  roadblockBehavior();

  //Car spawn handler
	let spawnInterval: any = null;
  if (xIsGreen) {
    spawnInterval = setInterval(() => {
      if (xIsGreen) {
        let count = 1;
        activeCars.push(new XCar(0, ctx, count));
        count++;
      }
    }, 1000);
  }

  //Car movement handler
  const moveInterval = setInterval(() => {
    for (let car of activeCars) {
      car.move(1);
    }
  }, 15);

  //Roadblock/caution handler
  const roadblockInterval = setInterval(roadblockBehavior, 5000);

  clearInterval(spawnInterval);
  clearInterval(moveInterval);
  // clearInterval(roadblockInterval);

  //HELPER FUNCTIONS
  function handleCaution() {
    xIsGreen ? (xIsCaution = true) : (yIsCaution = true);

    if (xIsCaution) {
      xCaution.unhide();
    } else if (yIsCaution) {
      yCaution.unhide();
    }
  }

  function handleRoadblock() {
    if (xIsCaution) {
      xIsCaution = false;
    } else if (yIsCaution) {
      yIsCaution = false;
    }
    xIsGreen = !xIsGreen;

    if (xIsGreen) {
      xLight.hide();
      yLight.unhide();
      for (let car of activeCars) {
        car.setAllowed(true);
      }
    } else {
      yLight.hide();
      xLight.unhide();
      for (let car of activeCars) {
        car.setAllowed(false);
      }
    }
  }

  function roadblockBehavior() {
    setTimeout(handleCaution, 2000);

    setTimeout(handleRoadblock, 3000);
  }
};

export default entityManager;
