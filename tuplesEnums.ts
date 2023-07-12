import { uptime } from "process";

const color: [number, number, number] = [1, 2, 3]

type HTTPResponse = [number, string];

const goodRes: HTTPResponse[] = [200, "ok"], []

// goodRes.push(123)
// goodRes.pop()
// goodRes.pop()
// goodRes.pop()


enum OrderStatus {
  PENDING = 10,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const status = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED);


enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 234
}

if movee === ArrowKeys.LEFT