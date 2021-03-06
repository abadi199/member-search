import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./app.reducer";
import { MemberTableComponent } from "./member-table/member-table.component";
import { LoadingIndicatorComponent } from "./loading-indicator/loading-indicator.component";
import { ErrorComponent } from "./error/error.component";
import { RemoteDataComponent } from "./remote-data/remote-data.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchFormComponent,
        SearchResultComponent,
        MemberTableComponent,
        LoadingIndicatorComponent,
        ErrorComponent,
        RemoteDataComponent
      ],
      imports: [StoreModule.forRoot({ appStore: reducer })]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Member Search'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Member Search");
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Member Search");
  }));
});
