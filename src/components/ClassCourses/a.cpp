#include <bits/stdc++.h>
#include <numeric>
#define fast()                        \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);
#define endl "\n"
#define mod 1000000007
#define PI 3.14159265358979323846
#define ff first
#define pb push_back
#define ss second
#define un unordered
#define for0(i, n) for (i = 0; i < n; i++)
#define for1(j, n) for (j = 1; j <= n; j++)
#define ll long long int
#define all(v) v.begin(), v.end()
#define t6 2000010
#define t5 200005
using namespace std;
int dx[4] = {1, 0, -1, 0};
int dy[4] = {0, 1, 0, -1};
int ddx[8] = {1, 1, 0, -1, -1, -1, 0, 1};
int ddy[8] = {0, 1, 1, 1, 0, -1, -1, -1};
void solve(map<ll, ll> mp)
{
    for (auto it : mp)
    {
        cout << it.second;
    }
    cout << endl;
    cout.flush();
}
int main()
{
    fast()

        // #ifndef ONLINE_JUDGE
        //	freopen("./input.txt", "r", stdin);
        // #endif

        int t;
    cin >> t;
    ll b;
    cin >> b;

    for (int z = 0; z < t; z++)
    {
        //cout << "Case #" << i + 1 << ": ";
        ll i = 1, k = 1, a, flag = 0;
        char A;
        map<ll, ll> mp;
        while (i <= 150)
        {

            if (i % 10 == 1 && i != 1)
            {
                //   cout<<"df";
                cout << (k) << endl;
                cout.flush();
                cin >> A;
                a = (A - '0') + 1;
                i++;
                map<ll, ll> rev, com, revcom;
                solve(mp);
                for (auto it : mp)
                {
                    rev[b - it.first + 1] = it.second;
                }
                solve(rev);
                for (auto it : mp)
                {
                    com[it.first] = 3 - it.second;
                }
                solve(com);
                for (auto it : mp)
                {
                    revcom[b - it.first + 1] = 3 - it.second;
                }
                solve(revcom);
                if (mp[k] == a)
                {
                    for (auto it : revcom)
                    {
                        if (rev[it.first] != it.second)
                        {
                            k = it.first;
                            break;
                        }
                    }
                    cout << k << endl;
                    cout.flush();
                    cin >> A;
                    a = (A - '0') + 1;
                    i++;
                    if (rev[k] == a)
                    {
                        for (auto it : mp)
                        {
                            if (rev[it.first] != it.second)
                            {
                                k = it.first;
                                break;
                            }
                        }
                        cout << k << endl;
                        cout.flush();
                        cin >> A;
                        a = (A - '0') + 1;
                        i++;
                        if (rev[k] == a)
                        {
                            mp = rev;
                            flag = 3;
                        }
                    }
                    else
                    {
                        for (auto it : mp)
                        {
                            if (revcom[it.first] != it.second)
                            {
                                k = it.first;
                                break;
                            }
                        }
                        cout << k << endl;
                        cout.flush();
                        cin >> A;
                        a = (A - '0') + 1;
                        i++;
                        if (revcom[k] == a)
                        {
                            mp = revcom;
                            flag = 1;
                        }
                    }
                }
                else
                {
                    for (auto it : revcom)
                    {
                        if (rev[it.first] != it.second)
                        {
                            k = it.first;
                            break;
                        }
                    }
                    cout << k << endl;
                    cout.flush();
                    cin >> A;
                    a = (A - '0') + 1;
                    i++;
                    if (rev[k] == a)
                    {
                        for (auto it : com)
                        {
                            if (rev[it.first] != it.second)
                            {
                                k = it.first;
                                break;
                            }
                        }
                        cout << k << endl;
                        cout.flush();
                        cin >> A;
                        a = (A - '0') + 1;
                        i++;
                        if (rev[k] == a)
                        {
                            mp = rev;
                            flag = 3;
                        }
                        else
                        {
                            mp = com;
                            flag = 2;
                        }
                    }
                    else
                    {
                        for (auto it : com)
                        {
                            if (revcom[it.first] != it.second)
                            {
                                k = it.first;
                                break;
                            }
                        }
                        cout << k << endl;
                        cout.flush();
                        cin >> A;
                        a = (A - '0') + 1;
                        i++;
                        if (revcom[k] == a)
                        {
                            // cout<<"ddk";
                            // cout.flush();
                            mp = revcom;
                            flag = 1;
                        }
                        else
                        {
                            mp = com;
                            flag = 2;
                        }
                    }
                }
                for (int j = 1; j <= b; j++)
                {
                    if (mp.count(j) == 0)
                    {
                        k = j;
                        break;
                    }
                }
            }

            else
            {
                for (int j = 1; j <= b; j++)
                {
                    if (mp[j] == 0)
                    {
                        k = j;
                        break;
                    }
                }
                cout << k << endl;
                cout.flush();
                cin >> A;
                a = (A - '0') + 1;
                mp[k] = a;
                i++;
            }

            if (mp.size() == b)
            {
                cout << flag << " "
                     << "ndsjn" << endl;
                cout.flush();
                for (auto it : mp)
                {
                    cout << char(it.second + '0' - 1);
                }
                cout << endl;
                cout.flush();
                char c;
                cin >> c;
                if (c == 'N')
                {
                    exit(0);
                }
                break;
            }
        }
        ///  cout.flush();
    } /*	
	#ifndef ONLINE_JUDGE
    	cout<<"Time Elapsed: " << 1.0*clock() / CLOCKS_PER_SEC << " sec\n";
	#endif*/

    return 0;
}