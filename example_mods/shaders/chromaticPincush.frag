#pragma header
// Thanks to NickWest and gonz84 for the shaders I combined together!
// Those shaders being "Chromatic Abberation" and "pincushion single axis"

void main(void)
{
    	vec2 uv = openfl_TextureCoordv.xy;

        vec2 st = uv - 0.5;
    	float theta = atan(st.x, st.y);
 		float radius = sqrt(dot(st, st));
    	radius *= 1.0 + -0.5 * pow(radius, 2.0);
        
        
        vec4 col;
        col.r = texture2D(bitmap, vec2(0.5 + sin(theta) * radius+((uv.x+0.5)/500.0),uv.y)).r;
        col.g = texture2D(bitmap, vec2(0.5 + sin(theta) * radius,uv.y)).g;
        col.b = texture2D(bitmap, vec2(0.5 + sin(theta) * radius-((uv.x+0.5)/500.0),uv.y)).b;
        col.a = texture2D(bitmap, vec2(0.5 + sin(theta) * radius-((uv.x+0.5)/500.0),uv.y)).a;
	
    gl_FragColor = col;
}
