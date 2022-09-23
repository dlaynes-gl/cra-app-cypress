function cov_21x3cbeip3() {
  var path = "/Users/donato.laynes/Projects/SoFi/test/demo-app/src/cypress/e2e/app.cy.tsx";
  var hash = "e441a9d8104381b7184a8438110a2eaf0b1965be";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/donato.laynes/Projects/SoFi/test/demo-app/src/cypress/e2e/app.cy.tsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 6,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 38
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 18
          },
          end: {
            line: 3,
            column: 19
          }
        },
        loc: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e441a9d8104381b7184a8438110a2eaf0b1965be"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21x3cbeip3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_21x3cbeip3();
export {};
cov_21x3cbeip3().s[0]++;
it('should work', () => {
  cov_21x3cbeip3().f[0]++;
  cov_21x3cbeip3().s[1]++;
  cy.visit('http://localhost:3000');
  cov_21x3cbeip3().s[2]++;
  cy.get('a').should('have.text', 'Learn React');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpdCIsImN5IiwidmlzaXQiLCJnZXQiLCJzaG91bGQiXSwic291cmNlcyI6WyJhcHAuY3kudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fVxuXG5pdCgnc2hvdWxkIHdvcmsnLCAoKSA9PiB7XG4gICAgY3kudmlzaXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuICAgIGN5LmdldCgnYScpLnNob3VsZCgnaGF2ZS50ZXh0JywgJ0xlYXJuIFJlYWN0Jyk7XG59KSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTs7Ozs7Ozs7O0FBZlo7O0FBRUFBLEVBQUUsQ0FBQyxhQUFELEVBQWdCLE1BQU07RUFBQTtFQUFBO0VBQ3BCQyxFQUFFLENBQUNDLEtBQUgsQ0FBUyx1QkFBVDtFQURvQjtFQUVwQkQsRUFBRSxDQUFDRSxHQUFILENBQU8sR0FBUCxFQUFZQyxNQUFaLENBQW1CLFdBQW5CLEVBQWdDLGFBQWhDO0FBQ0gsQ0FIQyxDQUFGIn0=