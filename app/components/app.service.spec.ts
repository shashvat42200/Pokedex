import { TestBed } from "@angular/core/testing";

import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe("AppService", () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    service = TestBed.inject(AppService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
